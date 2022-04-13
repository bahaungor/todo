import { selectedProject } from ".";

function sidebarProjectFunctionality(){
    const sidebarProjects = document.querySelectorAll(".project");
    sidebarProjects.forEach(project => project.addEventListener("click", (e) => {
        selectProject(e);
        displayProjectTasks(e);
        updateContentTitle(e);
    }));
    function selectProject(e){
        sidebarProjects.forEach(project => project.classList.remove("active"));
        e.currentTarget.classList.add("active");
        selectedProject = e.currentTarget.dataset.id;
    }
    function displayProjectTasks(e){
        const addTaskButton = document.querySelector(".add-task");
        addTaskButton.classList.remove("hidden");
    }
    function updateContentTitle(e){
        document.querySelector(".content-title").textContent = e.currentTarget.textContent;
    }
}

export {sidebarProjectFunctionality}