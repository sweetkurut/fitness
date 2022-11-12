// HAMBURGER-MENU
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav');

const toggleMenu = () => {
  menu.classList.toggle('is-active');
  hamburger.classList.toggle('is-active');
}

hamburger.addEventListener('click', e => {
  e.stopPropagation();

  toggleMenu();
});