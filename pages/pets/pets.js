let popup = document.querySelector('.popup');
let slidersBtns = document.querySelectorAll('.slide-btn');
// let body = document.querySelector('body');

async function getData() {
  return fetch('./../../assets/pets.json')
  .then((response) => {
    return response.json()
  })
  .then((jsonResponse) => {
    return jsonResponse
  })
}

const createSlide = function createSlide(pet) {
  const slideTemplate = `
  <div class="slide">
  <div class="img-box">
  <img 
  src="${pet.img}" 
  alt="${pet.name}"
  >
  </div>
  <h4 class="title slide__title">${pet.name}</h4>
  <a href="#/" class="btn btn--ghost">Learn more</a>
  </div>`
  return slideTemplate;
}

function createSlides(slides) {
  let el = document.querySelector('.slides');
  let slidesHTML = [];
  for (let slide of slides) {
    slidesHTML.push(createSlide(slide))
  }
  el.innerHTML = slidesHTML.join('');
}

const createPopup = function createPopup(pet) {
  const popupTemplate = `
  <div class="popup__content">
  <button class="cancel__btn btn btn--ghost"></button>
  <img 
  class="popup__img"
  src="${pet.img}" alt="${pet.name}">
  <div class="text-block">
  <h3 class="popup__title">${pet.name}</h3>
  <h4 class="popup__subtitle">${pet.type} - ${pet.breed}</h4>
  <div class="popup__text">${pet.description}</div>
  <ul class="popup__list">
  <li class="popup__item">
  <span class="item__name">Age:</span><span class="age"> ${pet.age}</span>
  </li>
  <li class="popup__item">
  <span class="item__name">Inoculations:</span><span class="inoculations"> ${pet.inoculations}</span>
  </li>
  <li class="popup__item">
  <span class="item__name">Diseases:</span><span class="diseases"> ${pet.diseases}</span>
  </li>
  <li class="popup__item">
  <span class="item__name">Parasites:</span><span class="parasites"> ${pet.parasites}</span>
  </li>
  </ul>
  </div>
  </div>
  `
  return popupTemplate;
}

let petsData;

function openPopup(event, petName) {
  popup.innerHTML = createPopup(petsData.find(pet => pet.name === petName))
  let popupContent = document.querySelector('.popup__content');
  popup.style.zIndex = '1';
  popup.classList.remove('hide--popup');
  document.body.classList.add('no-scrolling');
  // handlers to close popup
  let cancelBtn = document.querySelector('.cancel__btn');
  cancelBtn.addEventListener('click', hidePopup)
  onClickClose(popupContent, event)
}

function hidePopup() {
  popup.classList.add('hide--popup');
  document.body.classList.remove('no-scrolling');
  setTimeout(() => { popup.style.zIndex = '-100' }, 250);          //даём время анимации
}

function onClickClose(elem, firstClickEvent) {            // вызвать в момент показа окна, где elem - окно
  function outsideClickListener(event) {
    if (event.target != firstClickEvent.target) {
      if (!elem.contains(event.target) && isVisible(elem)) {            // проверяем, что клик не по элементу
        hidePopup();
        document.removeEventListener('click', outsideClickListener);
      }
    }
  }
  document.addEventListener('click', outsideClickListener)
}

function isVisible(elem) {
  return !!elem && !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
}

getData().then((data) => {
    petsData = data;
    createSlides(data.sort(() => .5 - Math.random()).slice(0, 8))
    let slideElements = document.querySelectorAll('.slide');
    // slideElements.forEach(slide => {
    //   slide.addEventListener('click', function(event){openPopup(event, this.querySelector('.slide__title').textContent)}, true);
    // });
    slidersBtns.forEach(sliderBtn => {
      sliderBtn.addEventListener("click", () => {createSlides(data.sort(() => .5 - Math.random()).slice(0, 8))})
    });
    slideElements.forEach(slide => {
        slide.addEventListener('click', function(event){openPopup(event, this.querySelector('.slide__title').textContent)}, true);
      });
  }
);

// slidersBtns.forEach(sliderBtn => {  sliderBtn.addEventListener('click', console.log('жмяк'))});



// setTimeout( () => {slideElements.forEach(slide => {
//     slide.addEventListener('click', function(event){openPopup(event, this.querySelector('.slide__title').textContent)}, true);
// });}, 200)



