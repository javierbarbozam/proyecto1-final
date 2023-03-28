
let carousel = document.querySelector('.carousel');
let carouselItem = document.querySelector('.carousel-item');
let carouselWidth, cardsWidth;

const carouselCard = () => {
  fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/hotel?highlight=true', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(element => {
    let cardsInfo = '';
    element.forEach(element => {
      cardsInfo +=
        `<li class="carousel-item__card">
        <img class="carousel-item__card__img" src="./${element.image}" alt="">
        <span class="carousel-item__card__title">${element.name}</span>
        <a href="./destination/destination.html?search=${element.name}" class="carousel-item__card__link"><span class="visually-hidden">Show More</span></a>
      </li>`
    })

    carouselItem.insertAdjacentHTML(
      'afterbegin',
      `${cardsInfo}`
    )

    // Hide the scrollbar
    carouselItem.style.overflow = 'hidden';

    // Update cards and call the resize function after the cards have been added
    let cards = document.querySelectorAll('.carousel-item__card');
    resize();

    // Buttons functionality
    const carouselBtn = document.querySelectorAll('.carousel-btn');
    carouselBtn.forEach(button => {
      button.addEventListener('click', () => {
        carouselItem.scrollLeft += button.classList[1] == 'carousel-btn--left' ? -cardsWidth : cardsWidth;
      })
    })
  }).catch(error => {
    // handle error
  })
}
carouselCard()

function resize() {
  let cards = document.querySelectorAll('.carousel-item__card');
  carouselWidth = carousel.offsetWidth;
  cardsWidth = cards[0].offsetWidth;

  // According to the media query, the gap changes, so this part is made to add the correct amount to the card width
  if (carouselWidth < 480) {
    cardsWidth += 5;
  } else if (carouselWidth < 1024) {
    cardsWidth += 10;
  } else { cardsWidth += 20 }
}

// Viewport event to have the card size always updated
window.addEventListener('resize', resize);
