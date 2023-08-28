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
            const project = document.createElement('div')
            project.textContent = projects[i]
            project.classList.add('button')
            project.classList.add('project')
            projectList.appendChild(project)
        }
    }
}

export {openProjectForm, closeProjectForm, addProject, loadProjects}