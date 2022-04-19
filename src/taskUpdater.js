import { projects } from "./projectLoader";
import { selectedProject } from "./sidebarProjectListFunctionality";

function addFunctionalityToTasks(){
    document.querySelectorAll(".task-container #task-done").forEach(a => 
        a.addEventListener("change", completeTask));
    
    document.querySelectorAll(".task-container #task-importance").forEach(a => 
        a.addEventListener("change", favoriteTask));
}

function favoriteTask(){
    if (this.checked){
        projects[this.parentNode.dataset.project].tasks[this.parentNode.dataset.id].importance = true;
        localStorage.setItem("projects_by_baha", JSON.stringify(projects));
    } else{
        projects[this.parentNode.dataset.project].tasks[this.parentNode.dataset.id].importance = false;
        localStorage.setItem("projects_by_baha", JSON.stringify(projects));
    }
}

function completeTask(){
    if (this.checked){
        projects[this.parentNode.dataset.project].tasks[this.parentNode.dataset.id].done = true;
        localStorage.setItem("projects_by_baha", JSON.stringify(projects));
    } else{
        projects[this.parentNode.dataset.project].tasks[this.parentNode.dataset.id].done = false;
        localStorage.setItem("projects_by_baha", JSON.stringify(projects));
    }
}

export {addFunctionalityToTasks}