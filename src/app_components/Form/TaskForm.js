import {useState} from "react";
import '../../style/TaskList.css';
export default function TaskForm({onAdd}) {
    const [taskName,setTaskName] = useState('');
    const handleSubmit =(ev) =>{
        ev.preventDefault();
        onAdd(taskName);
        setTaskName('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <button>+</button>
            <input type="text"
                   value={taskName}
                   onChange={ev => setTaskName(ev.target.value)}
                   placeholder="Add new task"/>
        </form>
    );
}