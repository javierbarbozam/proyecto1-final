import { pageInfo, pageCards } from "./destinationApi.js";


const container = document.querySelector('#js-info-container');

// In order to have the first data form every destination, the function must be evoked
pageInfo()

// Destination buttons
const btnFunctionality = () => {
  const info_btn = document.querySelector('#js-btn-info');
  const card_btn = document.querySelector('#js-btn-card');
  info_btn.disabled = true;

  card_btn.addEventListener('click', (event) => {
    event.preventDefault()

    //Clear data from container
    container.innerHTML = '';
    
    //Call the function
    pageCards()

    //Disable button
    info_btn.disabled = false;
    card_btn.disabled = true;
  });

  info_btn.addEventListener('click', (event) => {
    event.preventDefault()

    //Clear data from container
    container.innerHTML = '';
    
    //Call the function
    pageInfo()

    //Disable button
    info_btn.disabled = true;
    card_btn.disabled = false;
  });
}
btnFunctionality()