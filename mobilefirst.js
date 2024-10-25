const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const categoryMenu = document.getElementById('categoryMenu');

openMenu.addEventListener('click', () => {
    menu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('show');
});

document.getElementById("category").addEventListener("click", function() {
    this.classList.toggle("active");
});