
import {AllTasksFilter, CompletedTasksFilter, IncompleteTasksFilter} from "./FilterStrategy";

class TaskFilterStrategyFactory {
    createFilterStrategy(filter) {
        switch (filter) {
            case "finalizate":
                return new CompletedTasksFilter();
            case "nefinalizate":
                return new IncompleteTasksFilter();
            default:
                return new AllTasksFilter();
        }
    }
}

export default TaskFilterStrategyFactory;
