
class AllTasksFilter {
    filter(tasks) {
        return tasks; // Returnează toate sarcinile
    }
}
class CompletedTasksFilter {
    filter(tasks) {
        return tasks.filter(task => task.done); // Returnează doar sarcinile finalizate
    }
}
class IncompleteTasksFilter {
    filter(tasks) {
        return tasks.filter(task => !task.done); // Returnează doar sarcinile nefinalizate
    }
}

export { AllTasksFilter, CompletedTasksFilter, IncompleteTasksFilter };
