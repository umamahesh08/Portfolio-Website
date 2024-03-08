const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", function() {
    // This toggles the active class on the toggle element
    toggle.classList.toggle("active");
    // This toggles the active class on the menu element
    menu.classList.toggle("active");
});
