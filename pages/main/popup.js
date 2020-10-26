let pets = [];
let fullPetsList = [];
let popupTitle = 
let popupSubtitle =

const request = new XMLHttpRequest();
request.open('GET', './pets.json');

request.onload = () => {
    pets = JSON.parse(request.response);


    for (let i = 0; i < 6; i++) {                   // размножаем животных
        fullPetsList = [...fullPetsList, ...pets];  //добавляем к массиву FullPetsList новых животных

    }
    // createPets();
}


response.send()