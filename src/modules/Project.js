export class Project {
    constructor(name, taskList) {
        this.name = name;
        this.taskList = taskList;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTaskList() {
        return this.taskList;
    }

    setDate(taskList) {
        this.taskList = taskList;
    }
}