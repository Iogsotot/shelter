let burgerBtnOpen = document.getElementById('burgerOpen');
let burgerBtnClose = document.getElementById('burgerClose');
let nav = document.querySelector('.header__nav__list');
let headerLogo = document.querySelector('.header__logo');
let burgerLogo = document.querySelector('.burger__logo .logo');
let body = document.querySelector('body');
let overlay = document.querySelector('.overlay');
let aboutLink = document.getElementById('about');

function slide() {
    // console.log('дратути');
    nav.classList.toggle('slide-out');
    setTimeout( () => { burgerLogo.classList.toggle('hide')}, 250);
    headerLogo.classList.toggle('fly--right');
    body.classList.toggle('no-scrolling');
    overlay.classList.toggle('hide');
}
// прописать активацию всем hide при изменении ширины экрана с открытым бургером

// Listeners
burgerBtnOpen.addEventListener('click', slide);
burgerBtnClose.addEventListener('click', slide);
aboutLink.addEventListener('click', slide);


