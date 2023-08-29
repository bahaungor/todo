function loadAllTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks_todolist_baha")) || [];

    const container = document.querySelector('.container')

    if (tasks.length == 0){
        // container.innerHTML = ''
        return
    } else {
        container.innerHTML = ''
        for (let i = 0; i < array.length; i++) {
            const taskContainer = document.createElement('div')
            taskContainer.classList.add('taskContainer')
            taskContainer.setAttribute('data-id', i)

            const taskTitle = document.createElement('h3')
            taskTitle.classList.add('taskTitle')
            taskTitle.textContent = tasks[i]['taskTitle']
            taskContainer.appendChild(taskTitle)

            const taskDescription = document.createElement('div')
            taskDescription.classList.add('taskDescription')
            taskDescription.textContent = tasks[i]['taskDescription']
            taskContainer.appendChild(taskDescription)
            
            const taskProject = document.createElement('div')
            taskProject.classList.add('taskProject')
            taskTitle.textContent = tasks[i]['taskProject']
            taskContainer.appendChild(taskProject)

            const taskDate = document.createElement('div')
            taskDate.classList.add('taskDate')
            taskDate.textContent = tasks[i]['taskDate']
            taskContainer.appendChild(taskDate)

            const taskCompletion = document.createElement('div')
            taskCompletion.classList.add('taskCompletion')
            taskCompletion.textContent = tasks[i]['taskCompletion']
            taskContainer.appendChild(taskCompletion)

            container.appendChild(taskContainer)
        }
    }
}

function openTaskForm(){
    document.querySelector('.container').innerHTML = ''
    document.querySelector('.newTaskForm').classList.remove('none')
}

function closeTaskForm(){
    document.querySelector('.newTaskForm').classList.add('none')
    loadAllTasks()
}

function submitTaskForm(){
    console.log("meme")
}

export {loadAllTasks, openTaskForm, closeTaskForm, submitTaskForm}