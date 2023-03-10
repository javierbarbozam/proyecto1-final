// Select the necessary items
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const carousel = document.querySelector(".carousel");
const cardWidth = carousel.querySelector(".carousel-item__title").offsetWidth;

// Calculate the horizontal displacement
const cardsToShow = 6;
const scrollDistance = cardWidth * cardsToShow;

// Add event listeners to the navigation buttons
prevBtn.addEventListener("click", function () {
  carousel.scrollBy(-scrollDistance, 0);
});

nextBtn.addEventListener("click", function () {
  carousel.scrollBy(scrollDistance, 0);
});

