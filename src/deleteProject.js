import { updateIDs } from "./addUpdateProject";
import { projects } from "./projectLoader";
import { loadProjects } from "./projectLoader";
import { selectedProject } from "./sidebarProjectListFunctionality";


const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach(button => button.addEventListener("click", deleteThatProject));
function deleteThatProject(e){
    console.log(selectedProject);
    const decision = confirm("Are you sure you want to delete this project & tasks inside it?");
    if(decision){
        projects.splice(selectedProject, 1);
        localStorage.setItem("projects_by_baha", JSON.stringify(projects));
    }
    updateIDs();
    loadProjects();
}

export { deleteThatProject }
