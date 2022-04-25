import { listAllTasks } from './homeButtonsFunctions'
import { projects } from './projectLoader'
import { selectedProject } from './sidebarProjectListFunctionality'
import { loadProjectsTasks } from './taskLoader'

function addDeleteFunctionalityToVisibleTasks() {
    const deleteButtons = document.querySelectorAll(
        '.task-container .delete-button'
    )
    deleteButtons.forEach((btn) => btn.addEventListener('click', deleteTask))
    console.log(projects)
}

function deleteTask() {
    const confirmation = confirm(
        'Are you sure you want to delete "' +
            projects[this.parentNode.dataset.project].tasks[
                this.parentNode.dataset.id
            ].title +
            '" task from "' +
            projects[this.parentNode.dataset.project].projectTitle +
            '" ?'
    )
    if (confirmation) {
        projects[this.parentNode.dataset.project].tasks.splice(
            this.parentNode.dataset.id,
            1
        )
        let i = 0
        projects[this.parentNode.dataset.project].tasks.forEach((task) => {
            task.id = i
            i++
        })
        localStorage.setItem('projects_by_baha', JSON.stringify(projects))
        if (selectedProject == '') {
            document
                .querySelectorAll('.project')
                .forEach((project) => project.classList.remove('active'))
            document
                .querySelectorAll('.sidebar-item')
                .forEach((button) => button.classList.remove('active'))
            document
                .querySelector('.sidebar-item.all-tasks')
                .classList.add('active')
            document.querySelector('.content-title').textContent = 'All Tasks'
            document.querySelector('.add-task').classList.add('hidden')
            listAllTasks()
        } else {
            loadProjectsTasks()
        }
    } else {
        return
    }
}

export { addDeleteFunctionalityToVisibleTasks }
