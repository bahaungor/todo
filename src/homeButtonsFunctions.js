const menubuttons = document.querySelectorAll(".sidebar-item");
const contentTitle = document.querySelector(".content-title");

menubuttons.forEach(button => button.addEventListener("click", (e) => {
    selectButton(e);
    updateContentTitle(e);
}));
function selectButton(e){
    menubuttons.forEach(button => button.classList.remove("active"));
    const sidebarProjects = document.querySelectorAll(".project");
    sidebarProjects.forEach(project => project.classList.remove("active"));
    e.target.classList.add("active");
}
function updateContentTitle(e){
    contentTitle.textContent = "";
    contentTitle.textContent = e.target.textContent;
    const addTaskButton = document.querySelector(".add-task");
    addTaskButton.classList.add("hidden");
}

export {menubuttons}