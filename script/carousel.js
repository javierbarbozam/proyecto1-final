const carousel = document.querySelector('.carousel-item'),
cards = carousel.querySelectorAll('.carousel-item__card')[0],
carouselBtn = document.querySelectorAll('.carousel-btn');
let cardsWidth = cards.clientWidth + 20; // necesita ser responsive




// Function for buttons

carouselBtn.forEach(button => {
  button.addEventListener ('click', () => {
    // This means that left btn will reduce width value from carrusel, and right btn will increase it.
    carousel.scrollLeft += button.classList[1] == 'carousel-btn--left' ? -cardsWidth : cardsWidth;
  })
})