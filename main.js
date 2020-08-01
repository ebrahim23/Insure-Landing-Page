const menu = document.getElementById("menu")
const nav  = document.querySelector('nav ul')

menu.addEventListener('click', function () {
    nav.classList.toggle('ul-mob')
})