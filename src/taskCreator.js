import { selectedProject } from "./sidebarProjectListFunctionality";
import {projects} from "./projectLoader"

const taskForm = document.querySelector(".task-form");
const addTaskButton = document.querySelector(".add-task");

addTaskButton.addEventListener("click", openTaskForm)
function openTaskForm(){
    console.log("new task will be added to project: " + selectedProject);
    console.log(projects[selectedProject]);
    taskForm.classList.remove("hidden");
    addTaskButton.classList.add("hidden");
}

const taskFormCancelBtn = document.querySelector(".task-form-button.cancel");
taskFormCancelBtn.addEventListener("click", closeTaskForm);
function closeTaskForm(){
    taskForm.classList.add("hidden");
    addTaskButton.classList.remove("hidden");
    taskForm.reset();
}

taskForm.addEventListener("submit", createTask);
function createTask(e){
    e.preventDefault();
    const title = document.querySelector(".task-form #task-title").value;
    const detail = document.querySelector(".task-form #task-details").value;
    const due = document.querySelector(".task-form #task-due-date").value;
    const newTask = taskConstructor(title, detail, due);
    projects[selectedProject].tasks.push(newTask);
    console.log(projects)
    closeTaskForm();
}

function taskConstructor(title, detail, due){
    const done = false;
    const importantance = false;
    return {done, title, detail, due, importantance}
}

export {addTaskButton}