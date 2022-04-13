const sidebar = document.querySelector(".sidebar");
const sidebarOpener = document.querySelector(".side-menu-opener");
const main = document.querySelector(".main");
let sidebarShown = true;
sidebarOpener.addEventListener("click", toggleSidebar);
function toggleSidebar(){
    if(sidebarShown){
        sidebar.style.display = "none";
        main.style.gridTemplateColumns = "1fr";
        sidebarShown = false;
    } else{
        sidebar.style.display = "block";
        main.style.gridTemplateColumns = "350px 1fr";
        sidebarShown = true;
    }
}

export {sidebarOpener}