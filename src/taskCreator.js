import { selectedProject } from "./sidebarProjectListFunctionality";

const addTaskButton = document.querySelector(".add-task");
addTaskButton.addEventListener("click", createTask)

function createTask(){
    console.log(selectedProject)
}

export {addTaskButton}