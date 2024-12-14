const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", function() {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
})

// menu.onclick = () => {
//     menu.classList.toggle("bx-x");
//     navbar.classList.toggle("open")
// }