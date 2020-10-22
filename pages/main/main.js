async function getData() {
  return fetch('./pets.json')
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
    <button class="btn btn--ghost" onclick="openPopup('${pet.name}')">Learn more</button>
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
    <img 
        class="popup__img"
        src="${pet.img}" alt="${pet.name}">
    <div class="text-block">
        <h3 class="popup__title">
          ${pet.name}
        </h3>
        <h4 class="popup__subtitle">
          ${pet.type} - ${pet.breed}
        </h4>
        <p class="text popup__text">
          ${pet.description}
        </p>
        <ul class="popup__list">
            <li class="age__item">
                <span class="item__name">
                    Age: 
                </span>
                <span class="item__data">
                  ${pet.age}
                </span>
            </li>
            <li class="inoculation__item">
                <span class="item__name">
                    Inoculations: 
                </span>
                <span class="item__data">
                  ${pet.inoculations}
                </span>
            </li>
            <li class="diseases__item">
                <span class="item__name">
                    Diseases: 
                </span>
                <span class="item__data">
                  ${pet.diseases}
                </span>
            </li>
            <li class="parasites__item">
                <span class="item__name">
                    Parasites: 
                </span>
                <span class="item__data">
                  ${pet.parasites}
                </span>
            </li>
        </ul>
    </div>
  </div>
  `
  return popupTemplate;
}

let petsData;

getData().then((data) => {
  petsData = data;
  createSlides(data.sort(() => .5 - Math.random()).slice(0,3))
}
);

function openPopup(petName) {
  let el = document.querySelector('.popup');
  el.innerHTML = createPopup(petsData.find(pet => pet.name === petName))
  el.style.display = 'block';
}

function closePopup() {
  let el = document.querySelector('.popup');
  el.innerHTML = ""
  el.style.display = 'none';
}
