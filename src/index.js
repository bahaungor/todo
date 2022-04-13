import { sidebarOpener } from "./sidebarOpener";
import { loadProjects,projects } from "./projectLoader";

loadProjects();

const menubuttons = document.querySelectorAll(".sidebar-item");
const contentTitle = document.querySelector(".content-title");
menubuttons.forEach(button => button.addEventListener("click", (e) => {
    selectButton(e);
    updateContentTitle(e);
    listTaks(e);
}));
function selectButton(e){
    menubuttons.forEach(button => button.classList.remove("active"));
    e.target.classList.add("active");
}
function updateContentTitle(e){
    contentTitle.textContent = "";
    contentTitle.textContent = e.target.textContent;
    const addTaskButton = document.querySelector(".add-task");
    addTaskButton.classList.add("hidden");
}

const form = document.querySelector(".project-form");
const addProjectButton = document.querySelector(".add-button");
addProjectButton.addEventListener("click", openProjectForm);
function openProjectForm(){
    form.style.display = "flex";
}

const cancelButton = document.querySelector(".project-form-button.cancel");
cancelButton.addEventListener("click", closeProjectForm);
function closeProjectForm(){
    document.querySelector(".project-form-input").value = "";
    form.style.display = "none";
}

let formEdit = false;
let selectedProject = "";
form.addEventListener("submit", addUpdateProject);
function addUpdateProject(e){
    e.preventDefault();
    if(formEdit){
        projects[selectedProject].projectTitle = form.querySelector(".project-form-input").value;
        formEdit = false;
        localStorage.setItem("projects_by_baha", JSON.stringify(projects));
        loadProjects();
        closeProjectForm();
    } else {
        const projectTitle = document.querySelector(".project-form-input").value;
        const newProject = projectCreator(projectTitle);
        projects.push(newProject);
        console.log(projects);
        localStorage.setItem("projects_by_baha", JSON.stringify(projects));
        loadProjects();
        closeProjectForm();
    }

}

function projectCreator(projectTitle){
    console.log("factory called")
    const id = projects.length;
    return {projectTitle, id};
}

// const deleteButtons = document.querySelectorAll(".delete-button");
// deleteButtons.forEach(button => button.addEventListener("click", deleteThatProject));
// function deleteThatProject(e){
//     const decision = confirm("Are you sure you want to delete this project & tasks inside it?");
//     if(decision){
//         projects.splice(selectedProject, 1);
//         localStorage.setItem("projects_by_baha", JSON.stringify(projects));
//         loadProjects();
//     }
// }

export {formEdit, selectedProject}