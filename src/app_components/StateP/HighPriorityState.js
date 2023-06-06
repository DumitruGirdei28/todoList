import TaskState from './TaskState';

class HighPriorityState extends TaskState {
    includes(task) {
        return task.priority === "urgent";
    }
}

export default HighPriorityState;
