import {form} from "./addUpdateProject"

const addProjectButton = document.querySelector(".add-button");
addProjectButton.addEventListener("click", openProjectForm);
function openProjectForm(){
    form.style.display = "flex";
}

const cancelButton = document.querySelector(".project-form-button.cancel");
cancelButton.addEventListener("click", closeProjectForm);
function closeProjectForm(){
    document.querySelector(".project-form-input").value = "";
    form.style.display = "none";
}

export {closeProjectForm, openProjectForm}