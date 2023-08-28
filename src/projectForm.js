function openProjectForm(){
    const newProjectForm = document.querySelector('.newProjectForm')
    const addProjectButton = document.querySelector('.button.addProject')
    newProjectForm.classList.remove('hidden')
    addProjectButton.classList.add('none')
    document.querySelector('#newProjectName').value = ''
}

function closeProjectForm(){
    const addProjectButton = document.querySelector('.button.addProject')

    document.querySelector('.newProjectForm').classList.add('hidden')
    addProjectButton.classList.remove('none')
    document.querySelector('#newProjectName').value = ''
}

function addProject(){
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    if (document.querySelector('#newProjectName').value == ''){
        alert("Please enter project name")
    } else if (projects.includes(document.querySelector('#newProjectName').value.toLowerCase())){
        alert("This project already exists.")
    } else {
        projects.push(document.querySelector('#newProjectName').value.toLowerCase())
        localStorage.setItem("projects", JSON.stringify(projects));
        loadProjects()
        closeProjectForm()
    }
}

function loadProjects(){
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const projectList = document.querySelector('.projectList')
    projectList.innerHTML = ''
    if (projects.length == 0){
        return
    } else {
        for (let i = 0; i < projects.length; i++) {
            const projectBtn = document.createElement('div')
            projectBtn.classList.add('button')
            projectBtn.classList.add('project')
            projectBtn.setAttribute('data-id', i)
            projectList.appendChild(projectBtn)

            const projectName = document.createElement('div')
            projectName.classList.add('projectName')
            projectName.textContent = projects[i]
            projectBtn.appendChild(projectName)

            const projectEdit = document.createElement('div')
            projectEdit.classList.add('edit')
            projectEdit.textContent = '✎'
            projectEdit.addEventListener('click', editProjectName)
            projectBtn.appendChild(projectEdit)

            const projectDelete = document.createElement('div')
            projectDelete.classList.add('delete')
            projectDelete.textContent = '🗑️'
            projectDelete.addEventListener('click', deleteProject)
            projectBtn.appendChild(projectDelete)
        }
    }
}

function editProjectName(){
    openProjectForm()
}

function deleteProject(){
    const reply = confirm('Are you sure you want to delete this project & every task inside it?')
    if (reply){
        const projects = JSON.parse(localStorage.getItem("projects"))
        projects.splice(this.parentNode.dataset.id, 1)
        localStorage.setItem("projects", JSON.stringify(projects));
        loadProjects()
    }
}

export {openProjectForm, closeProjectForm, addProject, loadProjects}