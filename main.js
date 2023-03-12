const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const carritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu )
burgerMenu.addEventListener('click', toggleMobileMenu )
carritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu () {
 desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
    const isAsideClosed = aside.classList.contains('inactive');

    aside.classList.toggle('inactive')
}