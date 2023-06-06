
class TaskBuilder {
    constructor() {
        this.task = {};
    }

    setName(name) {
        this.task.name = name;
        return this;
    }

    setPriority(priority) {
        this.task.priority = priority;
        return this;
    }

    setDone(done) {
        this.task.done = done;
        return this;
    }

    build() {
        return this.task;
    }
}


export default TaskBuilder;