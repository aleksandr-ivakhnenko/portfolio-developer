const LOGO_LINK_PRELOAD_CLASSNAME = 'header__logo-link_preload';
const LOGO_LINK_OPEN_CLASSNAME = 'header__logo-link_open';
const OVERLAY_PRELOAD_CLASSNAME = 'header__overlay_preload';
const BODY_FIXED_CLASSNAME = 'body_fixed';
const BUTTON_MENU_ICON_OPEN_CLASSNAME = 'button-menu__icon_open';
const MENU_BURGER_OPEN_CLASSNAME = 'menu-burger_open';

const LOGO_LEFT_CLASSNAME = 'header__logo-left_preload';
const LOGO_LINE_CLASSNAME = 'header__logo-line_preload';
const LOGO_RIGHT_CLASSNAME = 'header__logo-right_preload';


const logoLinkNode = document.querySelector('.js-logo-link');
const overlayNode = document.querySelector('.js-overlay');
const bodyNode = document.querySelector('body');
const buttonMenuNode = document.querySelector('.js-button-menu');
const buttonMenuIconNode = document.querySelector('.js-button-menu__icon');
const menuBurgerNode = document.querySelector('.js-menu-burger')
const menuBurgerContentNode = document.querySelector('.js-menu-burger__content')

const logoLeftNode = document.querySelector('.js-logo-left');
const logoLineNode = document.querySelector('.js-logo-line');
const logoRightNode = document.querySelector('.js-logo-right');


setTimeout(animationLogo, 100);
setTimeout(animationPreload, 2000);

buttonMenuNode.addEventListener('click', toggleBurger);

menuBurgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(menuBurgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    };
});

const burgerNavLinksNodes = Array.from(document.querySelectorAll('.menu-burger__link'));

burgerNavLinksNodes.forEach(element => {
    element.addEventListener('click', toggleBurger);
});


function animationPreload() {
    logoLinkNode.classList.remove(LOGO_LINK_PRELOAD_CLASSNAME);
    overlayNode.classList.remove(OVERLAY_PRELOAD_CLASSNAME);

    setTimeout(() => {
        bodyNode.classList.remove(BODY_FIXED_CLASSNAME);
    }, 1000)
};

function animationLogo() {
    logoLeftNode.classList.remove(LOGO_LEFT_CLASSNAME);
    logoLineNode.classList.remove(LOGO_LINE_CLASSNAME);
    logoRightNode.classList.remove(LOGO_RIGHT_CLASSNAME);
};

function toggleBurger() {
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    buttonMenuIconNode.classList.toggle(BUTTON_MENU_ICON_OPEN_CLASSNAME);
    menuBurgerNode.classList.toggle(MENU_BURGER_OPEN_CLASSNAME);

    logoLinkNode.classList.toggle(LOGO_LINK_OPEN_CLASSNAME);
};