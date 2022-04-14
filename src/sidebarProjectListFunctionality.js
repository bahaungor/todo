import { menubuttons } from "./homeButtonsFunctions";

let selectedProject = "";
function sidebarProjectFunctionality(){
    const sidebarProjects = document.querySelectorAll(".project");
    sidebarProjects.forEach(project => project.addEventListener("click", (e) => {
        highlightProject(e);
        displayProjectTasks(e);
        updateContentTitle(e);
        updateSelectedProject(e);
    }));
    function highlightProject(e){
        sidebarProjects.forEach(project => project.classList.remove("active"));
        menubuttons.forEach(button => button.classList.remove("active"));
        e.currentTarget.classList.add("active");
        
    }
    function displayProjectTasks(e){
        const addTaskButton = document.querySelector(".add-task");
        addTaskButton.classList.remove("hidden");
    }
    function updateContentTitle(e){
        document.querySelector(".content-title").textContent = e.currentTarget.textContent;
    }
    function updateSelectedProject(e){
        selectedProject = e.currentTarget.dataset.id;
        console.log("selected project is " + selectedProject)
    }
}

export {sidebarProjectFunctionality, selectedProject}