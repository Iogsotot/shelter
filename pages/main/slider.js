let pets = [];
let fullPetsList = [];

const request = new XMLHttpRequest();
request.open('GET', './pets.json');

request.onload = () => {
    pets = JSON.parse(request.response);


    for (let i = 0; i < 6; i++) {                   // размножаем животных
        fullPetsList = [...fullPetsList, ...pets];  //добавляем к массиву FullPetsList новых животных

    }
    // createPets();
}

const createPets = () => {
    const el = document.querySelector('.pets');     // наводимся на секцию Pets
    el.innerHTML += createSlide();                  //создаём слайд
}

const createSlide = function createSlide(pet) {     // функция создания слайда
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


response.send()