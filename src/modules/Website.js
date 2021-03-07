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

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    return main;
}

function createNav() {
    const nav = document.createElement("nav");
    nav.setAttribute("id", "nav");

    const title = document.createElement("p");
    title.setAttribute("id", "nav-title");
    title.textContent = "Projects";
    
    const addProject = document.createElement("a");
    addProject.classList.add("nav-link");
    addProject.textContent = "Add Project";
    addProject.setAttribute("href", "www.google.com");

    nav.appendChild(title);
    nav.appendChild(addProject);

    return nav;
}


function loadWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createFooter());
    content.appendChild(createNav());
    content.appendChild(createMain());

    //loadHome();
}

export default loadWebsite;