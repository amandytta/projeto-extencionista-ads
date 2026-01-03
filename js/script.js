const menu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');
const imgTheme = document.getElementById('change-theme');
const navLinksParent = imgTheme.parentElement; // dentro da nav-links
const themeMobileContainer = document.getElementById('theme-mobile-container');

function toggleTheme() {
    document.body.classList.toggle('dark-mode')
    const darkVerify = document.body.classList.contains('dark-mode')
    if(darkVerify) {
      imgTheme.src = '../assets/imagens/eclipse-alt.png'
    } else {
      imgTheme.src = '../assets/imagens/estrelas-da-lua.png'
    }
}

imgTheme.addEventListener('click', toggleTheme);

// função para mover o ícone conforme a largura
function moveThemeIcon() {
  const breakpoint = 768;

  if (window.innerWidth <= breakpoint) {
    // se for mobile e o ícone ainda está dentro da nav, move para o container
    if (imgTheme.parentElement !== themeMobileContainer) {
      themeMobileContainer.appendChild(imgTheme);
    }
  } else {
    // se for desktop e o ícone está fora, devolve para a nav-links
    if (imgTheme.parentElement !== navLinksParent) {
      navLinksParent.appendChild(imgTheme);
    }
  }
}

// chama ao carregar a página
window.addEventListener('load', moveThemeIcon);
// e quando redimensionar
window.addEventListener('resize', moveThemeIcon);

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