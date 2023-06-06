import './style/App.css';
import TaskForm from "./app_components/Form/TaskForm";
import Task1 from "./app_components/StateP/Task1";
import { useEffect, useState } from "react";

import TaskFilterStrategyFactory from './app_components/Strategy_FactoryMethod/TaskFilterStrategyFactory';
import MediumPriorityState from "./app_components/StateP/MediumPriorityState";
import LowPriorityState from "./app_components/StateP/LowPriorityState";
import HighPriorityState from "./app_components/StateP/HighPriorityState";
import {AllTasksFilter} from "./app_components/Strategy_FactoryMethod/FilterStrategy";
import TaskList from "./app_components/Adapter/TaskList";
import TaskBuilder from "./app_components/Builder/TaskBuilder";


const App = () => {
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState("toate");
    const [priorityFilter, setPriorityFilter] = useState("toate");
    const filterStrategyFactory = new TaskFilterStrategyFactory();
    const filterStrategy = filterStrategyFactory.createFilterStrategy(filter);
    const filterTasks = (tasks) => {
        return filterStrategy.filter(tasks);
    };

    const filterPriority = (tasks) => {
        if (priorityFilter === "toate") {
            return tasks.map(task => ({ ...task, priorityClass: "" }));
        } else {
            let priorityStrategy;
            if (priorityFilter === "urgent") {
                priorityStrategy = new HighPriorityState();
            } else if (priorityFilter === "mediu") {
                priorityStrategy = new MediumPriorityState();
            } else if (priorityFilter === "scazut") {
                priorityStrategy = new LowPriorityState();
            } else {
                priorityStrategy = new AllTasksFilter();
            }
            return tasks.map(task => ({
                ...task,
                priorityClass: priorityStrategy.includes(task) ? task.priority : ""
            }));}};


    useEffect(() => {
        if (tasks.length === 0) return;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('tasks'));
        setTasks(savedTasks || []);
    }, []);

    const addTask = (name, priority) => {
        const task = new TaskBuilder()
            .setName(name)
            .setPriority(priority)
            .setDone(false)
            .build();


        setTasks(prev => [...prev, task]);
    };


    const removeTask = (indexToRemove) => {
        setTasks(prev => {
            return prev.filter((taskObject, index) => index !== indexToRemove);
        });
    };

    const updateTaskDone = (taskIndex, newDone) => {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks[taskIndex].done = newDone;
            return newTasks;
        });
    };

    const renameTask = (index, newName) => {
        setTasks(prev => {
            const newTasks = [...prev];
            newTasks[index].name = newName;
            return newTasks;
        })
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };


    const handlePriorityFilterChange = (event) => {
        setPriorityFilter(event.target.value);
    };

    return (
        <main>
            <h1>LISTĂ DE ACTIVITĂȚI</h1>
            <div className="filter">
                <label htmlFor="filterSelect">Filtrare: </label>
                <select id="filterSelect" value={filter} onChange={handleFilterChange}>
                    <option value="toate">Toate</option>
                    <option value="finalizate">Finalizate</option>
                    <option value="nefinalizate">Nefinalizate</option>
                </select>
            </div>
            <div className="filter">
                <label htmlFor="priorityFilterSelect">Filtrare după prioritate: </label>
                <select id="priorityFilterSelect" value={priorityFilter} onChange={handlePriorityFilterChange}>
                    <option value="toate">toate</option>
                    <option value="urgent">urgent</option>
                    <option value="mediu">mediu</option>
                    <option value="scazut">scazut</option>
                </select>
            </div>
            <TaskForm onAdd={addTask}/>
            {filterPriority(filterTasks(tasks)).map((task, index) => (
                <Task1
                    key={index}
                    {...task}
                    onRename={(newName) => renameTask(index, newName)}
                    onTrash={() => removeTask(index)}
                    onToggle={(done) => updateTaskDone(index, done)}
                />
            ))}
            <TaskList tasks={tasks} />
        </main>
    );
}

export default App;

