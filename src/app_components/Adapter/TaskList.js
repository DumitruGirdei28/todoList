import React from "react";
import TaskAdapter from "./TaskAdapter";

const TaskList = ({ tasks }) => {
    return (
        <ul className="task-list1">
            {tasks.map((task) => {
                const adapter = new TaskAdapter(task);
                return (
                    <li key={adapter.getId()} className="task-item1">
                        <div className="task-info1">
                            <span className="task-name1">{adapter.getName()}</span>
                            <span className="task-priority1">{adapter.getPriority()}</span>
                        </div>
                        <div className="task-status1">
                            {adapter.isDone() ? "Finalizat" : "Nefinalizat"}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default TaskList;
