import {formEdit} from "./addUpdateProject"
import { openProjectForm } from "./projectFormOpenerCloser";
import {form} from "./addUpdateProject"

let selectedProject = "";
function sidebarProjectsEdit(){
    const editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach(button => button.addEventListener("click", viewProjectEditForm));
    function viewProjectEditForm(e){
        openProjectForm();
        formEdit = true;
        form.querySelector(".project-form-input").value = e.target.parentNode.textContent;
    }
}

export {sidebarProjectsEdit}