(()=>{"use strict";class t{constructor(t,e){this.name=t,this.taskList=e}getName(){return this.name}setName(t){this.name=t}getTaskList(){return this.taskList}setTaskList(t){this.taskList=t}addTask(t){this.taskList.push(t)}}class e{constructor(t,e,s){this.name=t,this.date=e,this.status=s}getName(){return this.name}setName(t){this.name=t}getDate(){return this.date}setDate(t){this.date=t}getStatus(){return this.status}setStatus(t){this.status=t}}let s=new class{constructor(){this.projectList=[],this.projectList.push(new t("Default Project",[new e("Do the dishes","Today","Not done")])),this.projectList.push(new t("Default Project2",[new e("Do the dishes","Today","Not done")]))}getProjectList(){return this.projectList}setProjectList(t){this.projectList=t}getProject(t){return this.projectList.find((e=>e.getName()===t))}};!function(){const t=document.getElementById("content");t.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const e=document.createElement("h1");return e.setAttribute("id","header-text"),e.textContent="Todo-list",t.appendChild(e),t}()),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("h5");return e.setAttribute("id","footer-text"),e.textContent="Website by admendes",t.appendChild(e),t}()),t.appendChild(function(){const t=document.createElement("nav");t.setAttribute("id","nav");const e=document.createElement("p");return e.setAttribute("id","nav-title"),e.textContent="Projects",t.appendChild(e),s.getProjectList().forEach((e=>{!function(t,e){const s=document.createElement("a");s.classList.add("nav-link"),s.textContent=t,s.setAttribute("href","www.google.com"),e.appendChild(s)}(e.getName(),t)})),t}()),t.appendChild(function(t){const e=document.createElement("main");e.textContent="",e.setAttribute("id","main"),s.getProject(t).getTaskList().forEach((t=>{!function(t,e){const s=document.createElement("a");s.classList.add("nav-link"),s.textContent=t,s.setAttribute("href","www.google.com"),e.appendChild(s)}(t.getName(),e)}));const n=document.createElement("button");return n.setAttribute("id","button-home"),n.classList.add("nav-button"),n.textContent="Home",e.appendChild(n),e}("Default Project"))}()})();