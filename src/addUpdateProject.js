import {projects} from "./projectLoader"
import {loadProjects} from "./projectLoader"
import {closeProjectForm} from "./projectFormOpenerCloser"
import {selectedProject} from "./sidebarProjectListFunctionality"

let formEdit = false;
const form = document.querySelector(".project-form");
form.addEventListener("submit", addUpdateProject);
function addUpdateProject(e){
    e.preventDefault();
    if(formEdit){
        projects[selectedProject].projectTitle = form.querySelector(".project-form-input").value;
        formEdit = false;
        localStorage.setItem("projects_by_baha",JSON.stringify(projects));
        loadProjects();
        closeProjectForm();
    } else {
        const projectTitle = document.querySelector(".project-form-input").value;
        const newProject = projectCreator(projectTitle);
        projects.push(newProject);
        localStorage.setItem("projects_by_baha",JSON.stringify(projects));
        loadProjects();
        closeProjectForm();
        document.querySelector(".tasks").innerHTML = "";
    }

}

function projectCreator(projectTitle){
    console.log("factory called")
    const id = projects.length;
    const tasks = [];
    return {projectTitle, id, tasks};
}

function updateIDs(){
    let i = 0;
    projects.forEach(project => {
        project.id = i;
        i++;
    })
}

export {form, formEdit, selectedProject, updateIDs}