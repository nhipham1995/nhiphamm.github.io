let button = document.querySelector(".toggle-menu");
let ul = document.getElementById("menu");

button.addEventListener("click", function() {
    let valueOpen = JSON.parse(button.getAttribute("aria-expanded"));
    button.setAttribute("aria-expanded", !valueOpen);
    ul.hidden = !ul.hidden;
});