import { Todolist } from "./Todolist";

let todos = new Todolist();

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const headerText = document.createElement("h1");
    headerText.setAttribute("id", "header-text");
    headerText.textContent ="Todo-list";
    header.appendChild(headerText);

    return header;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("h5");
    footerText.setAttribute("id", "footer-text");
    footerText.textContent ="Website by admendes";

    footer.appendChild(footerText);

    return footer;
}

function createMain(name) {
    const main = document.createElement("main");
    main.textContent = "";
    main.setAttribute("id", "main");


    const proj = todos.getProject(name);

    proj.getTaskList().forEach(element => {
        addTask(element.getName(), main);
    });;

    const homeButton = document.createElement("button");
    homeButton.setAttribute("id", "button-home");
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";

    main.appendChild(homeButton);

    return main;
}

function addTask(name, main) {
    const addTask = document.createElement("a");
    addTask.classList.add("nav-link");
    addTask.textContent = name;
    addTask.setAttribute("href", "www.google.com");
    main.appendChild(addTask);
}

function createNav() {
    const nav = document.createElement("nav");
    nav.setAttribute("id", "nav");

    const title = document.createElement("p");
    title.setAttribute("id", "nav-title");
    title.textContent = "Projects";
    
    nav.appendChild(title);

    todos.getProjectList().forEach(element => {
        addProject(element.getName(), nav);
    });;

    return nav;
}

function addProject(name, nav) {
    const addProject = document.createElement("a");
    addProject.classList.add("nav-link");
    addProject.textContent = name;
    addProject.setAttribute("href", "www.google.com");
    nav.appendChild(addProject);
}


function loadWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createFooter());
    content.appendChild(createNav());
    content.appendChild(createMain("Default Project"));

    //loadHome();
}

export default loadWebsite;