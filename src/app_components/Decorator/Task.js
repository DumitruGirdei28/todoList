class Task {
    constructor(name, priority) {
        this.name = name;
        this.priority = priority;
        this.state = null;
        this.labels = [];
    }

    setPriority(priority) {
        this.priority = priority;
    }

    addLabel(label) {
        this.labels.push(label);
    }


    setState(state) {
        this.state = state;
    }

    changePriority(priority) {
        this.state.setPriority(this, priority);
    }

    removeLabel(label) {
        const index = this.labels.indexOf(label);
        if (index !== -1) {
            this.labels.splice(index, 1);
        }
    }
}

export default Task;
