import { sidebarOpener } from "./sidebarOpener";
import { loadProjects } from "./projectLoader";
import {formEdit, selectedProject} from "./addUpdateProject"
import {addTaskButton} from "./taskCreator"
import {loadProjectsTasks} from "./taskLoader"
import {listAllTasks} from "./homeButtonsFunctions"

loadProjects();
listAllTasks();
