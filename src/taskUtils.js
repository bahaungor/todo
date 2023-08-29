function loadAllTasks(){
    const tasks = JSON.parse(localStorage.getItem("tasks_todolist_baha")) || [];

    const container = document.querySelector('.container')

    if (tasks.length == 0){
        // container.innerHTML = ''
        return
    } else {
        console.log(tasks)
        container.innerHTML = ''
        for (let i = 0; i < tasks.length; i++) {
            const taskContainer = document.createElement('div')
            taskContainer.classList.add('taskContainer')
            taskContainer.setAttribute('data-id', i)
            taskContainer.addEventListener('click', openTaskEditForm)

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
            taskProject.textContent = tasks[i]['taskProject']
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
    openTaskForm()
    const tasks = JSON.parse(localStorage.getItem("tasks_todolist_baha")) || [];
    const seletectedID = this.dataset.id
    const selection = tasks.filter(obj => obj.taskID == seletectedID)[0]
    console.log(selection)
    document.querySelector('#tTitle').value = selection['taskTitle']
    document.querySelector('#tDescription').value = selection['taskDescription']
    document.querySelector('#tproject').value = selection['taskProject']
    document.querySelector('#tdate').value = selection['taskDate']
    selection['taskCompletion'] ? document.querySelector('#tdone').checked = true : document.querySelector('#tdone').checked = false

    document.querySelector('.newTaskForm > .row > .add').removeEventListener('click', submitTaskForm)
    document.querySelector('.newTaskForm > .row > .add').addEventListener('click', editTask)

    function editTask(){
        tasks[seletectedID]['taskTitle'] = document.querySelector('#tTitle').value
        tasks[seletectedID]['taskDescription'] = document.querySelector('#tDescription').value
        tasks[seletectedID]['taskProject'] = document.querySelector('#tproject').value
        tasks[seletectedID]['taskDate'] = document.querySelector('#tdate').value
        tasks[seletectedID]['taskCompletion'] = document.querySelector('#tdone').checked
        document.querySelector('.newTaskForm > .row > .add').removeEventListener('click', editTask)
        document.querySelector('.newTaskForm > .row > .add').addEventListener('click', submitTaskForm)
        localStorage.setItem("tasks_todolist_baha", JSON.stringify(tasks));
        closeTaskForm()
    }

}

export {loadAllTasks, openTaskForm, closeTaskForm, submitTaskForm, openTaskEditForm}