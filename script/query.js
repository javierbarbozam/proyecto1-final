import { pageInfo, pageCta, urlDestination } from "./destinationApi.js";

const info_btn = document.querySelector('#js-btn-info');
const cta_btn = document.querySelector('#js-btn-cta');
const container = document.querySelector('#js-info-container');
const form = document.querySelector('#js-form');

//Change Btn Text depending on destination or hotel page
urlDestination == null?cta_btn.innerHTML = 'Query':cta_btn.innerHTML = 'Hotels'

//Hide form depending on destination or hotel page
// urlDestination == null?form.style.display = 'block':form.style.display = 'none';


const informationBtn = () => {

  // In order to have the first data form every destination, the function must be evoked
  pageInfo()
 
   //Disable button because is the first data shown
  info_btn.disabled = true;

  cta_btn.addEventListener('click', (event) => {
    event.preventDefault()

    //Clear data from container
    container.innerHTML = '';
    
    //Call the function
    pageCta()

    //Disable button
    info_btn.disabled = false;
    cta_btn.disabled = true;
  });

  info_btn.addEventListener('click', (event) => {
    event.preventDefault()

    //Clear data from container
    container.innerHTML = '';
    
    //Call the function
    pageInfo()

    //Disable button
    info_btn.disabled = true;
    cta_btn.disabled = false;
  });
}
informationBtn()