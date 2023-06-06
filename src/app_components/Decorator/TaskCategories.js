import React from "react";

const TaskCategories = ({ categories, onSelectCategory }) => {
    return (
        <div className="task-categories">
            <h2>Categorii de Task-uri</h2>
            <ul>
                {categories.map((category) => (
                    <li key={category.id} onClick={() => onSelectCategory(category)}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskCategories;
