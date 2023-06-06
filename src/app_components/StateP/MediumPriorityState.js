import TaskState from './TaskState';

class MediumPriorityState extends TaskState {
    includes(task) {
        return task.priority === "mediu";
    }
}

export default MediumPriorityState;
