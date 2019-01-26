// Menu Mobile

const menuButton = document.querySelector('.menu-mobile-btn');
const menuList = document.querySelector('.itens-paginas.mobile');

const openMenu = (event) => {
    menuButton.classList.toggle('active');
    menuList.classList.toggle('active');
}

menuButton.addEventListener('click', openMenu);