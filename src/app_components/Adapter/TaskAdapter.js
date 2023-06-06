class TaskAdapter {
    constructor(task) {
        this.task = task;
    }

    getId() {
        return this.task.id;
    }

    getName() {
        return this.task.name;
    }

    getPriority() {
        return this.task.priority;
    }

    isDone() {
        return this.task.done;
    }
}
export default TaskAdapter