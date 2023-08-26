function setTheme() {
    const root = document.documentElement;
    const Btn = root.querySelector(".tt");
    root.className === 'dark' ? root.removeAttribute('class') : root.className = 'dark';
    Btn.textContent == "☀️" ? Btn.textContent ="🌙" : Btn.textContent ="☀️"
}

export {setTheme};