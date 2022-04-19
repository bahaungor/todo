import { updateIDs } from "./addUpdateProject";
import { projects } from "./projectLoader";
import { loadProjects } from "./projectLoader";
import { selectedProject } from "./sidebarProjectListFunctionality";
import { menubuttons } from "./homeButtonsFunctions";
import { listAllTasks } from "./homeButtonsFunctions";
import {listTodaysTasks} from "./homeButtonsFunctions"

const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach(button => button.addEventListener("click", deleteThatProject));
function deleteThatProject(e){
    const decision = confirm("Are you sure you want to delete " + projects[e.currentTarget.parentNode.dataset.id].projectTitle + " & tasks inside it?");
    if(decision){
        projects.splice(e.currentTarget.parentNode.dataset.id, 1);
        localStorage.setItem("projects_by_baha", JSON.stringify(projects));
        updateIDs();
        loadProjects();
        selectedProject = "";
        listTodaysTasks();
    }
}

export { deleteThatProject }
