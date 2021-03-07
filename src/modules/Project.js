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

    setTaskList(taskList) {
        this.taskList = taskList;
    }

    addTask(task) {
        this.taskList.push(task);
    }

    /*
    getTask(task) {
        return this.taskList
    }
    */
    
}