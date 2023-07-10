const BODY_FIXED_CLASSNAME = 'body_fixed';
const BUTTON_MENU_ICON_OPEN_CLASSNAME = 'button-menu__icon_open';
const MENU_BURGER_OPEN_CLASSNAME = 'menu-burger_open';

const logoLinkNode = document.querySelector('.js-logo-link');
const overlayNode = document.querySelector('.js-overlay');
const bodyNode = document.querySelector('body');
const buttonMenuNode = document.querySelector('.js-button-menu');
const buttonMenuIconNode = document.querySelector('.js-button-menu__icon');
const menuBurgerNode = document.querySelector('.js-menu-burger')
const menuBurgerContentNode = document.querySelector('.js-menu-burger__content')

buttonMenuNode.addEventListener('click', toggleBurger);

menuBurgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(menuBurgerContentNode);

    if (isClickOutsideContent) {
        toggleBurger();
    };
});

const burgerNavLinksNodes = Array.from(document.querySelectorAll('.menu-burger__link'));

burgerNavLinksNodes.forEach(element => {
    element.addEventListener('click', toggleBurger);
});

function toggleBurger() {
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    buttonMenuIconNode.classList.toggle(BUTTON_MENU_ICON_OPEN_CLASSNAME);
    menuBurgerNode.classList.toggle(MENU_BURGER_OPEN_CLASSNAME);

    logoLinkNode.classList.toggle(LOGO_LINK_OPEN_CLASSNAME);
};