import { Project } from "./Project";
import { Task } from "./Task";

export class Todolist {
    
    constructor() {
        this.projectList = [];
           //load from localstorage
        this.projectList.push(new Project('Default Project', [new Task("Do the dishes", "Today", "Not done")]));
        this.projectList.push(new Project('Default Project2', [new Task("Do the dishes", "Today", "Not done")]));

    }

    getProjectList() {
        return this.projectList;
    }

    setProjectList(projectList) {
        this.projectList = projectList;
    }

}