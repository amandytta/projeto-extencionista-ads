const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');


menu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menu.classList.toggle('open');
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target)) {
    navLinks.classList.remove('active');
    menu.classList.remove('open');
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menu.classList.remove('open');
  });
});