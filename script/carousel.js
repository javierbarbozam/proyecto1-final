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
    
    // Add a counter for loaded images
    let imagesLoaded = 0;

    // Iterate through all the images and add an event listener for the load event
    cards.forEach(card => {
      const img = card.querySelector('img');
      img.addEventListener('load', () => {
        imagesLoaded++;

        // When all images are loaded, call the resize function
        if (imagesLoaded === cards.length) {
          resize();
        }
      });
    });

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

// const carousel = document.querySelectorAll('.carousel')[0],   // carousel container, the one that will give the size of the screen
// carouselItem = document.querySelectorAll('.carousel-item')[0], // The cards container, the one that will scroll to the left or right
// cards = document.querySelectorAll('.carousel-item__card')[0], // Here I got the carousel cards from the DOM to access to width property
// carouselBtn = document.querySelectorAll('.carousel-btn'); // Getting the carousel buttons to add functionability
// let carouselWidth = carousel.offsetWidth; // Making a variable with the carousel container width 
// let cardsWidth = cards.offsetWidth; // Making a variable with the carousel card width 

// // This function verify the screen width and add the gap css style to the card, in order to have a simetric scroll
// function resize () {
//   carouselWidth = carousel.offsetWidth;
//   cardsWidth = cards[0].offsetWidth;

//   // According to the media query, the gap changes, so this part is made to add the correct amount to the card width
//   if (carouselWidth < 480) {
//     cardsWidth += 5;
//   } else if (carouselWidth < 1024) {
//     cardsWidth += 10;
//   } else { cardsWidth += 20}
// }

// // Viewport event to have the card size always updated
// window.addEventListener ('resize', resize);

// // Buttons functionability
// carouselBtn.forEach(button => {
//   button.addEventListener ('click', () => {
//     // This means that left btn will reduce width value from carrusel, and right btn will increase it.
//     carouselItem.scrollLeft += button.classList[1] == 'carousel-btn--left' ? -cardsWidth : cardsWidth;
//   })
// })

// ///// DYNAMIC CONTENT

// // const carouselItem = document.querySelector('.carousel-item') // The cards container, the one that will scroll to the left or right


// // const carouselCard = () => {
// //   fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/hotel?highlight=true', {
// //     method: 'GET',
// //     headers: {'content-type':'application/json'},
// //   }).then(res => {
// //     if (res.ok) {
// //       return res.json();
// //     }
// //   }).then(element => {
// //     let cardsInfo = '';
// //     element.forEach(element => {
// //       cardsInfo +=
// //       `<li class="carousel-item__card">
// //         <img class="carousel-item__card__img" src="./${element.image}" alt="">
// //         <span class="carousel-item__card__title">${element.name}</span>
// //         <a href="./hotel.hotel.html?search=${element.name}" class="carousel-item__card__link"><span class="visually-hidden">Show More</span></a>
// //       </li>`
// //     })

// //     carouselItem.insertAdjacentHTML (
// //       'afterbegin',
// //       `${cardsInfo}`
// //     )

// //     const carouselFunctionality = () => {

// //       const carousel = document.querySelector('.carousel'); // carousel container, the one that will give the size of the screen
// //       const cards = document.querySelectorAll('.carousel-item__card'); // Card width property
// //       let carouselWidth = carousel.offsetWidth; // Variable with carousel container width 
// //       let cardsWidth = cards.offsetWidth; // Variable with card width

// //       // This function verify the screen width and add the gap css style to the card, in order to have a simetric scroll
// //       function resize () {
// //         carouselWidth = carousel.offsetWidth;
// //         cardsWidth = cards.offsetWidth;

// //          // According to the media querry, the gap changes, so this part is made to add the correct amount to the card with
// //         if (carouselWidth < 480) {
// //           cardsWidth += 5;
// //         } else if (carouselWidth < 1024) {
// //           cardsWidth += 10;
// //         } else { cardsWidth += 20}
// //       }
        
// //       // First call of the function to have size of the elements once the browser has load the DOM
// //       resize()
// //       // Viewport event to have the card size always updated
// //       window.addEventListener ('resize', resize);

// //       // Buttons functionability
// //       const carouselBtn = document.querySelectorAll('.carousel-btn');
// //       carouselBtn.forEach(button => {
// //         button.addEventListener ('click', () => {
// //           // This means that left btn will reduce width value from carrusel, and right btn will increase it.
// //         carouselItem.scrollLeft += button.classList[1] == 'carousel-btn--left' ? -cardsWidth : cardsWidth;
// //         })
// //       })
// //     }

// //     carouselFunctionality()
// //   }).catch(error => {
// //    // handle error
// //   })
// // }
// // carouselCard()

// let carousel = document.querySelector('.carousel');
// let carouselItem = document.querySelector('.carousel-item');
// let carouselWidth, cardsWidth;

// const carouselCard = () => {
//   fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/hotel?highlight=true', {
//     method: 'GET',
//     headers: { 'content-type': 'application/json' },
//   }).then(res => {
//     if (res.ok) {
//       return res.json();
//     }
//   }).then(element => {
//     let cardsInfo = '';
//     element.forEach(element => {
//       cardsInfo +=
//         `<li class="carousel-item__card">
//         <img class="carousel-item__card__img" src="./${element.image}" alt="">
//         <span class="carousel-item__card__title">${element.name}</span>
//         <a href="./destination/destination.html?search=${element.name}" class="carousel-item__card__link"><span class="visually-hidden">Show More</span></a>
//       </li>`
//     })

//     carouselItem.insertAdjacentHTML(
//       'afterbegin',
//       `${cardsInfo}`
//     )

//     // Hide the scrollbar
//     carouselItem.style.overflow = 'hidden';

//     // Update cards and call the resize function after the cards have been added
//     let cards = document.querySelectorAll('.carousel-item__card');
//     resize();

//     // Buttons functionality
//     const carouselBtn = document.querySelectorAll('.carousel-btn');
//     carouselBtn.forEach(button => {
//       button.addEventListener('click', () => {
//         carouselItem.scrollLeft += button.classList[1] == 'carousel-btn--left' ? -cardsWidth : cardsWidth;
//       })
//     })
//   }).catch(error => {
//     // handle error
//   })
// }
// carouselCard()

// function resize() {
//   let cards = document.querySelectorAll('.carousel-item__card');
//   carouselWidth = carousel.offsetWidth;
//   cardsWidth = cards[0].offsetWidth;

//   // According to the media query, the gap changes, so this part is made to add the correct amount to the card width
//   if (carouselWidth < 480) {
//     cardsWidth += 5;
//   } else if (carouselWidth < 1024) {
//     cardsWidth += 10;
//   } else { cardsWidth += 20 }
// }

// // Viewport event to have the card size always updated
// window.addEventListener('resize', resize);

