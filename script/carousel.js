const carousel = document.querySelectorAll('.carousel')[0],   // carousel container, the one that will give the size of the screen
carouselItem = document.querySelectorAll('.carousel-item')[0], // The cards container, the one that will scroll to the left or right
cards = document.querySelectorAll('.carousel-item__card')[0], // Here I got the carousel cards from the DOM to access to width property
carouselBtn = document.querySelectorAll('.carousel-btn'); // Getting the carousel buttons to add functionability
let carouselWidth = carousel.offsetWidth; // Making a variable with the carousel container width 
let cardsWidth = cards.offsetWidth; // Making a variable with the carousel card width 

// This function verify the screen width and add the gap css style to the card, in order to have a simetric scroll
function resize () {
  carouselWidth = carousel.offsetWidth;
  cardsWidth = cards.offsetWidth;

  // According to the media querry, the gap changes, so this part is made to add the correct amount to the card with
  if (carouselWidth < 480) {
    cardsWidth += 5;
  } else if (carouselWidth < 1024) {
    cardsWidth += 10;
  } else { cardsWidth += 20}
}
// First call of the function to have size of the elements once the browser has load the DOM
resize()
// Viewport event to have the card size always updated
window.addEventListener ('resize', resize);

// Buttons functionability
carouselBtn.forEach(button => {
  button.addEventListener ('click', () => {
    // This means that left btn will reduce width value from carrusel, and right btn will increase it.
    carouselItem.scrollLeft += button.classList[1] == 'carousel-btn--left' ? -cardsWidth : cardsWidth;
  })
})