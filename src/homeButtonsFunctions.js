import { projects } from "./projectLoader";
import {compareAsc, toDate} from "date-fns";
import { addFunctionalityToTasks } from "./taskUpdater";

const menubuttons = document.querySelectorAll(".sidebar-item");
const contentTitle = document.querySelector(".content-title");


menubuttons.forEach(button => button.addEventListener("click", (e) => {
    selectButton(e);
    updateContentTitle(e);
}));
function selectButton(e){
    menubuttons.forEach(button => button.classList.remove("active"));
    const sidebarProjects = document.querySelectorAll(".project");
    sidebarProjects.forEach(project => project.classList.remove("active"));
    e.target.classList.add("active");
}
function updateContentTitle(e){
    contentTitle.textContent = "";
    contentTitle.textContent = e.target.textContent;
    const addTaskButton = document.querySelector(".add-task");
    addTaskButton.classList.add("hidden");
}

const allTasksButton = document.querySelector(".sidebar-item.all-tasks");
allTasksButton.addEventListener("click", listAllTasks);
function listAllTasks(){
    const html = projects.map(project => {
        return project.tasks.map(task => {
            return `
            <div class="task-container" data-id="${task.id}" data-project="${task.projectID}">
                <input type="checkbox" id="task-done" ${(task.done) ? "checked": ""}>
                <div class="task-title">${task.title}</div>
                <div class="due-date">${task.due}</div>
                <input type="checkbox" id="task-importance" ${(task.importance) ? "checked": ""}>
                <div class="task-details">${task.detail}</div>
                <img class="menu-icon delete-button" src="../src/images/delete.png">
            </div>`
        }).join("");
    }).join("");
    document.querySelector(".tasks").innerHTML = "";
    document.querySelector(".tasks").innerHTML = html;
    addFunctionalityToTasks();
}

const todayButton = document.querySelector(".sidebar-item.today");
todayButton.addEventListener("click", listTodaysTasks);
function listTodaysTasks(){
    const html = projects.map(project => {
        return project.tasks.map(task => {
            if(compareAsc(Date.parse(task.due), Date.parse(new Date().toISOString().split('T')[0])) == 0){
                return `
                <div class="task-container" data-id="${task.id}">
                    <input type="checkbox" id="task-done" ${(task.done) ? "checked": ""}>
                    <div class="task-title">${task.title}</div>
                    <div class="due-date">${task.due}</div>
                    <input type="checkbox" id="task-importance" ${(task.importance) ? "checked": ""}>
                    <div class="task-details">${task.detail}</div>
                    <img class="menu-icon delete-button" src="../src/images/delete.png">
                </div>`
            }
        }).join("");
    }).join("");
    document.querySelector(".tasks").innerHTML = "";
    document.querySelector(".tasks").innerHTML = html;
}

const importantButton = document.querySelector(".sidebar-item.important");
importantButton.addEventListener("click", listImportantTasks);
function listImportantTasks(){
    const html = projects.map(project => {
        return project.tasks.map(task => {
            if(task.importance == true){
                return `
                <div class="task-container" data-id="${task.id}">
                    <input type="checkbox" id="task-done" ${(task.done) ? "checked": ""}>
                    <div class="task-title">${task.title}</div>
                    <div class="due-date">${task.due}</div>
                    <input type="checkbox" id="task-importance" ${(task.importance) ? "checked": ""}>
                    <div class="task-details">${task.detail}</div>
                    <img class="menu-icon delete-button" src="../src/images/delete.png">
                </div>`
            }
        }).join("");
    }).join("");
    document.querySelector(".tasks").innerHTML = "";
    document.querySelector(".tasks").innerHTML = html;
}

export {menubuttons, listAllTasks, listTodaysTasks}