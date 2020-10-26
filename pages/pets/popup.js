// let pets = [];
// let fullPetsList = [];
let popup = document.querySelector('.popup');
let slides = document.querySelectorAll('.slide');
// let title = document.querySelector('.');
// let subtitle = document.querySelector('.');
// let text = document.querySelector('.');
// let age = document.querySelector('.');
// let age = document.querySelector('.');
// let age = document.querySelector('.');
// let age = document.querySelector('.');
// let img = document.querySelector('.');

let cancelBtn = document.querySelector('.cancel__btn');

function showPopup(event) {
    popup.style.zIndex = '1';
    popup.classList.remove('hide--popup');
    // console.log('я тоже работаю');
}

function hidePopup() {
    popup.classList.add('hide--popup');
    setTimeout(() => { popup.style.zIndex = '-100' }, 250);          //даём время анимации
    // console.log('я работаю');
}

function onClickClose(elem) {                                        // вызвать в момент показа окна, где elem - окно
    function outsideClickListener(event) {
        if (!elem.contains(event.target) && isVisible(elem)) {     
            console.log("ASDASDASD")                    // проверяем, что клик не по элементу
            console.log(isVisible(elem))
            console.log(elem)
            hidePopup();
            document.removeEventListener('click', outsideClickListener);
        }
    }
    document.addEventListener('click', outsideClickListener)
}

function isVisible(elem) {
    return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

//listeners
cancelBtn.addEventListener('click', hidePopup);
slides.forEach(slide => {
    slide.addEventListener('click', showPopup);
});

//run
hidePopup()