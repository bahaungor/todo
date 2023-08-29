import { setTheme } from './themeUtils';
import { openProjectForm, closeProjectForm, addProject, loadProjects} from './projectForm';
import { loadAllTasks, openTaskForm, closeTaskForm, submitTaskForm } from './taskUtils';
import "./style.css";

document.querySelector('.tt').addEventListener('click', setTheme)
document.querySelector('.button.addProject').addEventListener('click', openProjectForm)
document.querySelector('.newProjectForm > .row > .add').addEventListener('click', addProject)
document.querySelector('.newProjectForm > .row > .cancel').addEventListener('click', closeProjectForm)

document.querySelector('.addTask').addEventListener('click', openTaskForm)
document.querySelector('.newTaskForm > .row > .add').addEventListener('click', submitTaskForm)
document.querySelector('.newTaskForm > .row > .cancel').addEventListener('click', closeTaskForm)

window.addEventListener('load', loadProjects)
window.addEventListener('load', loadAllTasks)