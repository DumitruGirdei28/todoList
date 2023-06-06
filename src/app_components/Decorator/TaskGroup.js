
import Task from './Task';

class TaskGroup extends Task {
    constructor(name, priority) {
        super(name, priority);
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }

    getTasks() {
        return this.tasks;
    }
}
export default TaskGroup;