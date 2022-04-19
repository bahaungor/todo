import { deleteThatProject } from "./deleteProject";
import { sidebarProjectFunctionality } from "./sidebarProjectListFunctionality";
import { sidebarProjectsEdit } from "./sidebarProjectEdits";
import { updateIDs } from "./addUpdateProject";


const projects = JSON.parse(localStorage.getItem("projects_by_baha")) || [];

function loadProjects(){
    const html = projects.map(project => {
        return `
        <div class="project" data-id=${project.id}>
            <div class="project-title">${project.projectTitle}</div>
            <img class="menu-icon edit-button" src="../src/images/edit.png" alt="edit">
            <img class="menu-icon delete-button" src="../src/images/delete.png" alt="delete">
        </div>
        `;
    }).join("");
    document.querySelector(".projects").innerHTML = "";
    document.querySelector(".projects").innerHTML = html;
    document.querySelectorAll(".project .delete-button").forEach(deleteButton => deleteButton.addEventListener("click", deleteThatProject));
    updateIDs();
    // const sidebarProjectContainer = document.querySelector(".projects");
    // sidebarProjectContainer.innerHTML = "";
    // projects.forEach(item => {
    //     const project = document.createElement("div");
    //     project.classList.add("project");
    //     project.dataset.id = item.id;
    //     const projectTitle = document.createElement("div");
    //     projectTitle.classList.add("project-title");
    //     projectTitle.textContent = item.projectTitle;
    //     const editButton = document.createElement("img");
    //     editButton.classList.add("menu-icon");
    //     editButton.classList.add("edit-button");
    //     editButton.setAttribute("src", "../src/images/edit.png");
    //     const deleteButton = document.createElement("img");
    //     deleteButton.classList.add("menu-icon");
    //     deleteButton.classList.add("delete-button");
    //     deleteButton.setAttribute("src", "../src/images/delete.png");
    //     deleteButton.addEventListener("click", deleteThatProject);
    //     project.appendChild(projectTitle);
    //     project.appendChild(editButton);
    //     project.appendChild(deleteButton);
    //     sidebarProjectContainer.appendChild(project);
    // })
    sidebarProjectFunctionality();
    sidebarProjectsEdit();
}

export {loadProjects, projects}