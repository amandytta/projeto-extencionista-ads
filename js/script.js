const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const imgTheme = document.getElementById('change-theme');

imgTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    

    const darkVerify = document.body.classList.contains('dark-mode')

    if(darkVerify) {
      imgTheme.src = './assets/imagens/eclipse-alt.png'
    } else {
      imgTheme.src = './assets/imagens/estrelas-da-lua.png'
    }
})

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