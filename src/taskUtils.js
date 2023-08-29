function loadAllTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks_todolist_baha")) || [];

    const container = document.querySelector('.container')

    if (tasks.length == 0){
        // container.innerHTML = ''
        return
    } else {
        container.innerHTML = ''
        for (let i = 0; i < tasks.length; i++) {
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
            tasks[i]['taskCompletion'] ? taskCompletion.textContent = 'Completed' : taskCompletion.textContent = 'Not Completed'
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
    document.querySelector('#tTitle').value = ''
    document.querySelector('#tDescription').value = ''
    document.querySelector('#tproject').value = ''
    document.querySelector('#tdate').value = ''
    document.querySelector('#tdone').checked = false
    loadAllTasks()
}

function submitTaskForm(){
    const tasks = JSON.parse(localStorage.getItem("tasks_todolist_baha")) || [];

    if (document.querySelector('#tTitle').value == ''){
        alert('Please enter title for your task!')
        return
    }

    const Task = function(taskTitle, taskDescription, taskProject, taskDate, taskCompletion){
        taskTitle = document.querySelector('#tTitle').value
        taskDescription = document.querySelector('#tDescription').value
        taskProject = document.querySelector('#tproject').value
        taskDate = document.querySelector('#tdate').value
        taskCompletion = document.querySelector('#tdone').checked
        let taskID
        tasks.length == 0 ? taskID = 0 : taskID = Math.max(...tasks.map(o => o.taskID))+1
        return {taskTitle, taskDescription, taskProject, taskDate, taskCompletion, taskID}
    }

    const newTask = Task()
    tasks.push(newTask)
    localStorage.setItem("tasks_todolist_baha", JSON.stringify(tasks));
    closeTaskForm()
}

function openTaskEditForm(){
    console.log(this)
}

export {loadAllTasks, openTaskForm, closeTaskForm, submitTaskForm, openTaskEditForm}