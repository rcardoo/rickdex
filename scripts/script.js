const ENDPOINT_RICK = "https://rickandmortyapi.com/api/character";
const getSectionCard = document.querySelector('.cardContainer');
const getCard = document.querySelector('.card');
const getCardText = document.querySelector('.card-text');
const getButton = document.querySelector('.btn');
const getButtonBack = document.querySelector('.btn-back');

let inicio = 0;

function createCards() {
  inicio++
  fetchApi().then(results=>{
    results.forEach(element => {
      const name = element.name;
      const status = element.status;
      const image = element.image;
      const species = element.species;
      const gender = element.gender;
      
      const createBodyCard = document.createElement('div');
      createBodyCard.classList = 'card';
      getSectionCard.appendChild(createBodyCard);
  
      const createImgCard = document.createElement('img');
      createImgCard.src = image;
      createImgCard.classList = 'card-img-top';
      createBodyCard.appendChild(createImgCard);
      
      const createBodyNome = document.createElement('h5');
      createBodyNome.classList = 'card-title';
      createBodyNome.innerText = `${name}`;
      createBodyCard.appendChild(createBodyNome);
  
      const createBodyInfo = document.createElement('p');
      createBodyInfo.classList = 'card-text';
      createBodyInfo.innerText = `${status}`;
      createBodyCard.appendChild(createBodyInfo);
  
      const createBodyInfoSec = document.createElement('p');
      createBodyInfoSec.classList = 'card-title';
      createBodyInfoSec.innerText = species;
      createBodyNome.appendChild(createBodyInfoSec);
      
      if (status == 'Alive') {
        createBodyCard.style.borderBlockEnd = '3px solid #B3D929';
        createBodyInfo.style.color = '#B3D929';
      } if (status == 'Dead') {
        createBodyCard.style.borderBlockEnd = '3px solid red';
        createBodyInfo.style.color = 'red';
      } if (status == 'unknown') {
        createBodyCard.style.borderBlockEnd = '3px solid gray';
      }
    });
  });
};

async function fetchApi() {
  const requestApi = await fetch(`https://rickandmortyapi.com/api/character/?page=`+ inicio);
  const responseApi = await requestApi.json();
  return responseApi.results;
}

getButton.addEventListener('click', createCards);
createCards();

getButtonBack.addEventListener('click', () => {
  window.location.reload();
});
