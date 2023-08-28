import { setTheme } from './themeUtils';
import { openProjectForm, closeProjectForm, addProject, loadProjects} from './projectForm';
import { loadAllTasks } from './taskUtils';
import "./style.css";

document.querySelector('.tt').addEventListener('click', setTheme)
document.querySelector('.button.addProject').addEventListener('click', openProjectForm)
document.querySelector('.newProjectForm > .row > .add').addEventListener('click', addProject)
document.querySelector('.newProjectForm > .row > .cancel').addEventListener('click', closeProjectForm)
window.addEventListener('load', loadProjects)
window.addEventListener('load', loadAllTasks)