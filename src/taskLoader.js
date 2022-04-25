import { projects } from './projectLoader'
import { selectedProject } from './sidebarProjectListFunctionality'
import { addDeleteFunctionalityToVisibleTasks } from './taskDeleter'
import { addFunctionalityToTasks } from './taskUpdater'

const tasks = document.querySelector('.tasks')

function loadProjectsTasks() {
    if (projects[selectedProject].tasks.length == 0 || selectedProject == '') {
        tasks.innerHTML = ''
        tasks.textContent = 'Yayyyy! No Tasks!'
    } else {
        const html = projects[selectedProject].tasks
            .map((task) => {
                return `
            <div class="task-container" data-id="${task.id}" data-project="${
                    task.projectID
                }">
                <input type="checkbox" id="task-done" ${
                    task.done ? 'checked' : ''
                }>
                <div class="task-title">${task.title}</div>
                <div class="due-date">${task.due}</div>
                <input type="checkbox" id="task-importance" ${
                    task.importance ? 'checked' : ''
                }>
                <div class="task-details">${task.detail}</div>
                <img class="menu-icon delete-button" src="../src/images/delete.png">
            </div>`
            })
            .join('')
        tasks.innerHTML = ''
        tasks.innerHTML = html
        addFunctionalityToTasks()
        addDeleteFunctionalityToVisibleTasks()
    }
}

export { loadProjectsTasks }
