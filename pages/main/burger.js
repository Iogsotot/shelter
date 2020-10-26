let burgerBtnOpen = document.getElementById('burgerOpen');
let burgerBtnClose = document.getElementById('burgerClose');
let nav = document.querySelector('.header__nav__list');
let headerLogo = document.querySelector('.header__logo');
let burgerLogo = document.querySelector('.burger__logo .logo');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');

function slide() {
    // console.log('дратути');
    nav.classList.toggle('slide-out');
    setTimeout( () => { burgerLogo.classList.toggle('hide')}, 250);
    headerLogo.classList.toggle('fly--right');
    body.classList.toggle('no-scrolling');
    overlay.classList.toggle('hide');
}


// Listeners
burgerBtnOpen.addEventListener('click', slide);
burgerBtnClose.addEventListener('click', slide);


