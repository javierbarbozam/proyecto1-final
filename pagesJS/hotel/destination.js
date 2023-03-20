function createHTML() {
  const hotels = [
    {
      title: 'Arenal Backpackers Resort',
      imgSrc: 'img/manuel-antonio/best_western.jpg',
      imgAlt: 'The backyard and pool of a beautiful house seen from above surrounded by nature',
      info: 'Located 3.6 km from the slopes of the Arenal Volcano, this hostel offers its guests complimentary Wi-Fi access, luggage storage, and a snack bar.',
      link: './hotels/arenal-backpackers.html',
    },
    {
      title: 'Arenal Backpackers Resort',
      imgSrc: '../../imgs/la-fortuna/hotels/backpacker-resort/arenal-backpakers-hero.jpg',
      imgAlt: 'The backyard and pool of a beautiful house seen from above surrounded by nature',
      info: 'Located 3.6 km from the slopes of the Arenal Volcano, this hostel offers its guests complimentary Wi-Fi access, luggage storage, and a snack bar.',
      link: './hotels/arenal-backpackers.html',
    },
    {
      title: 'Arenal Backpackers Resort',
      imgSrc: '../../imgs/la-fortuna/hotels/backpacker-resort/arenal-backpakers-hero.jpg',
      imgAlt: 'The backyard and pool of a beautiful house seen from above surrounded by nature',
      info: 'Located 3.6 km from the slopes of the Arenal Volcano, this hostel offers its guests complimentary Wi-Fi access, luggage storage, and a snack bar.',
      link: './hotels/arenal-backpackers.html',
    }, {
      title: 'Arenal Backpackers Resort',
      imgSrc: 'img/manuel-antonio/best_western.jpg',
      imgAlt: 'The backyard and pool of a beautiful house seen from above surrounded by nature',
      info: 'Located 3.6 km from the slopes of the Arenal Volcano, this hostel offers its guests complimentary Wi-Fi access, luggage storage, and a snack bar.',
      link: './hotels/arenal-backpackers.html',
    },
    {
      title: 'Arenal Backpackers Resort',
      imgSrc: '../../imgs/la-fortuna/hotels/backpacker-resort/arenal-backpakers-hero.jpg',
      imgAlt: 'The backyard and pool of a beautiful house seen from above surrounded by nature',
      info: 'Located 3.6 km from the slopes of the Arenal Volcano, this hostel offers its guests complimentary Wi-Fi access, luggage storage, and a snack bar.',
      link: './hotels/arenal-backpackers.html',
    },
    {
      title: 'Arenal Backpackers Resort',
      imgSrc: '../../imgs/la-fortuna/hotels/backpacker-resort/arenal-backpakers-hero.jpg',
      imgAlt: 'The backyard and pool of a beautiful house seen from above surrounded by nature',
      info: 'Located 3.6 km from the slopes of the Arenal Volcano, this hostel offers its guests complimentary Wi-Fi access, luggage storage, and a snack bar.',
      link: './hotels/arenal-backpackers.html',
    }
  ];

  const hotelItems = hotels.map((hotel) => {
    return `
      <li class="minicart-item">
        <img class="minicart-item__img" src="${hotel.imgSrc}" alt="${hotel.imgAlt}">
        <span class="minicart-item__title">${hotel.title}</span>
        <p class="minicart-item__info">${hotel.info}</p>
        <a class="minicart-item__link" href="${hotel.link}">
          <span class="visually-hidden">Click to see more</span>
        </a>
      </li>
    `;
  }).join('');

  const companyLinks = ['About Us', 'FAQ', 'Contact Us'];
  const supportLinks = ['Resources', 'Discover', 'Booking'];
  const placesLinks = ['Destinations', 'Car Hire', 'Join Us'];
  const mediaClasses = ['tw', 'fb', 'inst'];

  const template = `
    <header class="header">
      <a class="header__title" href="../../../index.html">Traveling.</a>
      <a class="button button--sign-in" href="">Sign In</a>
    </header>
    <main>
      <div class="description">
        <div class="description__hero">
          <img class="description__hero__img" src="../../imgs/la-fortuna/place/la-fortuna-hero.jpeg" alt="">
        </div>
        <div class="description__info">
          <h1 class="description__info__title">La Fortuna</h1>
          <div class="description__info__btn">
            <button id="js-btn-info" class="button button--tabs">Information</button>
            <button id="js-btn-card" class="button button--tabs">Hotels</button>
          </div>
          <div id="js-info-container">
            <p class="description__info__text">La Fortuna is located in the Northern Highlands of Costa Rica, about 2.5 hours from San Jose’s international airport (SJO).The main star, Arenal Volcano, can been seen from almost every vantage point. Traveling has been creating memorable vacations for thousands of travelers every year. We are a company who cherishes the tropical beauty and unparalleled adventure that Costa Rica has to offer.</p>
          </div>
        </div>
      </div>
      <div id="js-card-container" class="js-hidden">
        <ul class="minicart">
          ${hotelItems}
        </ul>
      </div>
    </main>
    <footer class="footer">
      <div class="footer-item">
        <ul class="footer-item__list">
          <span class="footer-item__list__title">Company</span>
          ${companyLinks.map(link => `<li class="footer-item__list__link"><a class="footer__nav" href="#">${link}</a></li>`).join('')}
        </ul>
        <ul class="footer-item__list">
          <span class="footer-item__list__title">Support</span>
          ${supportLinks.map(link => `<li class="footer-item__list__link"><a class="footer__nav" href="#">${link}</a></li>`).join('')}
        </ul>
        <ul class="footer-item__list">
          <span class="footer-item__list__title">Places</span>
          ${placesLinks.map(link => `<li          <li class="footer-item__list__link">
          <a href="#">${link}</a>
        </li>
      `).join('')}
    </ul>
  </div>
  <div class="footer-item footer-item--media">
    <span class="footer-item__title">Traveling.</span>
    <ul class="footer-item__list footer-item__list--flex">
      ${mediaClasses.map(mediaClass => `
        <li class="footer-item__list__media">
          <a class="footer-item__list__media__${mediaClass}" href="#">
            <span class="visually-hidden">${mediaClass.toUpperCase()}</span>
          </a>
        </li>
      `).join('')}
    </ul>
  </div>
</footer>
`;

  document.body.innerHTML = template;
}

createHTML();

