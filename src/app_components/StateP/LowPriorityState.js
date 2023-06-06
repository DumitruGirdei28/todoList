import TaskState from './TaskState';

class LowPriorityState extends TaskState {
    includes(task) {
        return task.priority === "scazut";
    }
}

export default LowPriorityState;
