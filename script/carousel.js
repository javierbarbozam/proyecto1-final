const carousel = document.querySelectorAll('.carousel')[0],
carouselItem = document.querySelectorAll('.carousel-item')[0],
cards = document.querySelectorAll('.carousel-item__card')[0],
carouselBtn = document.querySelectorAll('.carousel-btn');
let carouselWidth = carousel.offsetWidth;
let cardsWidth = cards.offsetWidth; // necesita ser responsive


function resize () {
  carouselWidth = carousel.offsetWidth;
  cardsWidth = cards.offsetWidth;

  if (carouselWidth < 480) {
    cardsWidth += 5;
  } else if (carouselWidth < 1024) {
    cardsWidth += 10;
  } else { cardsWidth += 20}

  console.log(cardsWidth)
}

resize()
window.addEventListener ('resize', resize);

// Function for buttons

carouselBtn.forEach(button => {
  button.addEventListener ('click', () => {
    // This means that left btn will reduce width value from carrusel, and right btn will increase it.
    carouselItem.scrollLeft += button.classList[1] == 'carousel-btn--left' ? -cardsWidth : cardsWidth;
  })
})


// let cardSize = 0;

// console.log(carouselContainer)
// window.addEventListener ('resize', cardsWidth)
// window.addEventListener ('resize', )



// function cardsWidth () {
//   cardSize = 0
//   card_width = cards.offsetWidth;
//   containerWidth = carouselContainer[0].offsetWidth;
//   console.log('size',card_width)
//   // console.log('container',containerWidth)

//   if (containerWidth > 1024) {
//     return cardSize += (card_width += 20)
//   }

