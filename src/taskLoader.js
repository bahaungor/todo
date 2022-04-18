import { projects } from "./projectLoader";
import { selectedProject } from "./sidebarProjectListFunctionality";

const tasks = document.querySelector(".tasks");

function loadProjectsTasks(){
    console.log(projects);
    if("projects[selectedProject].tasks.length is " + projects[selectedProject].tasks.length == 0){
        console.log(projects[selectedProject].tasks.length);
        tasks.innerHTML = "";
        tasks.textContent = "Yayyyy! No Tasks!";
    } else {
        // projects[selectedProject].tasks.forEach(task => {
        //     const taskContainer = document.createElement("div");
        //     taskContainer.classList.add("task-container");
        //     taskContainer.dataset.id = task.id;
        //     const taskDone = document.createElement("input");
        //     taskDone.id = "task-done";
        //     taskDone.setAttribute("type", "checkbox");

        // })
        tasks.innerHTML = "";
        const html = projects[selectedProject].tasks.map(task => {
            return `
            <div class="task-container" data-id="${task.id}">
                <input type="checkbox" id="task-done">
                <div class="task-title">${task.title}</div>
                <div class="due-date">${task.due}</div>
                <input type="checkbox" id="task-importance">
                <div class="task-details">${task.detail}</div>
                <img class="menu-icon delete-button" src="../src/images/delete.png">
            </div>`
        }).join("");
        tasks.innerHTML = html;
        console.log(html);
    }
    
}

export {loadProjectsTasks}