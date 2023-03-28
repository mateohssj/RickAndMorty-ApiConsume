//get searching input

const txtSearchCharacter = document.getElementById('txt-search-character');

//get card container

const cardsContainer = document.getElementById('container-cards');

//save the url

const dataUrl = "https://rickandmortyapi.com/api/character";

//fetch method to load the cards (async-await)

const getApi = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

// const options = {method: 'GET'};

// fetch('https://rickandmortyapi.com/api/character', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


//create a function that create the cards

const createCard = (objCharacter) => {
    //create card-container
    const card = document.createElement('div');
    card.classList.add('card-character');
    //create image
    const imgCard = document.createElement('img');
    imgCard.src = objCharacter.image;
    imgCard.alt = objCharacter.name;
    //create description-container
    const descCharacter = document.createElement('div');
    descCharacter.classList.add('card-desc');
    //create description that come from the object
    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = objCharacter.name;
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = "Gender: " +objCharacter.gender;
    const statusCharacter = document.createElement('p');
    statusCharacter.textContent = "Status: " +objCharacter.status;

    //put-in html elements

    cardsContainer.appendChild(card);  
    card.appendChild(imgCard);

    card.appendChild(descCharacter); 
    descCharacter.appendChild(nameCharacter);
    descCharacter.appendChild(genderCharacter);
    descCharacter.appendChild(statusCharacter);    

}

/* <div class="card-character">
<img src="source\img\messi-campeon-mundial-2905420.webp">
<div class="card-desc">
    <h2>Messi</h2>
    <p>Gender: GOAT</p>
</div>
<div> */

//create a function to get all characters

const generateAllCharacters = async () => {
    const dataCharacters = await getApi(dataUrl);
    dataCharacters.map(character => createCard(character))
}

window.addEventListener('DOMContentLoaded', generateAllCharacters);


