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

    //const homeButton = document.createElement("button");
    //homeButton.setAttribute("id", "button-home");
    //homeButton.classList.add("nav-button");
    //homeButton.textContent = "Home";

    //main.appendChild(homeButton);





    //lixo
    const testbut = document.createElement("button");
    testbut.classList.add("test-button");
    testbut.textContent = "test";
    testbut.addEventListener('click', function() {

        testshit(main);
    });

    main.appendChild(testbut);
    //lixo





    return main;
}

//lixo
function testshit(main) {
    main.textContent = ""
    const testbut = document.createElement("button");
    testbut.classList.add("test-button");
    testbut.textContent = "test";
    testbut.addEventListener('click', function() {

        testshit(main);
    });

    main.appendChild(testbut); 
}

function addTask(name, main) {
    const task = document.createElement("button");
    task.classList.add("nav-link");
    task.textContent = name;
    task.setAttribute("background-color", "red");
    main.appendChild(task);
    console.log(main)
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


    //create new proj
    const newProject = document.createElement("a");
    newProject.classList.add("nav-link");
    newProject.textContent = "New Project";
    newProject.setAttribute("href", abc());
    nav.appendChild(newProject);

    return nav;
}

function addProject(name, nav) {
    const addProject = document.createElement("button");
    addProject.classList.add("nav-button");
    addProject.textContent = name;
    addProject.addEventListener('click', function() {
        console.log("qaa")
        var myobj = document.getElementById("main");
        myobj.remove(); 
        const content = document.getElementById("content");
        content.appendChild(createMain(name));
    });

    nav.appendChild(addProject);
}

function abc() {
    console.log("aaaa")
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