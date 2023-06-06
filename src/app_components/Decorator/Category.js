import React from "react";

const Category = ({ category, onRename, onTrash, onToggle }) => {
    const { name, tasks } = category;

    return (
        <div>
            <h2>{name}</h2>
            {tasks.map((task, index) => (
                <div key={index}>
                    <span>{task.name}</span>
                    <button onClick={() => onRename(index, "New Name")}>Rename</button>
                    <button onClick={() => onTrash(index)}>Delete</button>
                    <button onClick={() => onToggle(index, !task.done)}>Toggle</button>
                </div>
            ))}
        </div>
    );
};

export default Category;
