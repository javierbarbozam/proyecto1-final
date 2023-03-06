// Select the necessary items
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const carousel = document.querySelector(".carousel");
const cardWidth = carousel.querySelector(".card").offsetWidth;

// Calculate the horizontal displacement
const cardsToShow = 1.1;
const scrollDistance = cardWidth * cardsToShow;

// Update cardsToShow variable on resize
window.addEventListener("resize", function () {
  if (window.innerWidth <= 480) {
    cardsToShow = 1;
  } else {
    cardsToShow = 3;
  }
  scrollDistance = cardWidth * cardsToShow;
});

// Add event listeners to the navigation buttons
prevBtn.addEventListener("click", function () {
  carousel.scrollBy(-scrollDistance, 0);
});

nextBtn.addEventListener("click", function () {
  carousel.scrollBy(scrollDistance, 0);
});

