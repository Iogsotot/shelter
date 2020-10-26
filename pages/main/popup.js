// let pets = [];
// let fullPetsList = [];
let popup = document.querySelector('.popup');
let slide = document.querySelector('.slide');
// let title = document.querySelector('.');
// let subtitle = document.querySelector('.');
// let text = document.querySelector('.');
// let age = document.querySelector('.');
// let age = document.querySelector('.');
// let age = document.querySelector('.');
// let age = document.querySelector('.');
// let img = document.querySelector('.');

let cancelBtn = document.querySelector('.cancel__btn');

function showPopup () {
    // onClickClose(popup)
    popup.style.zIndex = '1';
    popup.classList.remove('hide');
    console.log('я тоже работаю');
}
 
function hidePopup () {
    popup.classList.add('hide');
    // popup.style.zIndex = '-100';
    setTimeout( () => {popup.style.zIndex = '-100'}, 250);          //даём время анимации
    console.log('я работаю');
}

function onClickClose(elem) {                             // вызвать в момент показа окна, где elem - окно
    function outsideClickListener(event) {
        if (!elem.contains(event.target)) {             // проверяем, что клик не по элементу
            hidePopup();
            document.removeEventListener('click', outsideClickListener);
        }               
    }
    document.addEventListener('click', outsideClickListener)
}

//listeners
cancelBtn.addEventListener('click', hidePopup);
slide.addEventListener('click', showPopup);

//run
hidePopup()

// const request = new XMLHttpRequest();
// request.open('GET', './pets.json');

// request.onload = () => {
//     pets = JSON.parse(request.response);


//     for (let i = 0; i < 6; i++) {                   // размножаем животных
//         fullPetsList = [...fullPetsList, ...pets];  //добавляем к массиву FullPetsList новых животных

//     }
//     // createPets();
// }


// response.send()