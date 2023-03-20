function createPage() {
  const minicartItems = [
    {
      imgSrc: '../../../imgs/la-fortuna/hotels/arenal-lodge/arenal-lodge-room1.jpg',
      title: 'Junior Suites',
      info: '1 or 2 Queen Beds Enjoy the best view of the Arenal Volcano, the rainforest, the birds, and the howler monkeys from the privacy of your balcony. The Junior Suites are located next to the main building. They all have air-conditioned',
      services: ['Jacuzzi'],
      price: '$610'
    },
    {
      imgSrc: '../../../imgs/la-fortuna/hotels/arenal-lodge/arenal-lodge-room2.jpg',
      title: 'Family Suites',
      info: 'These suites are apartments with connecting doors. Family suites are equipped with a microwave oven, a coffee maker, and a mini fridge. The family suites have two bedrooms and a separate living room',
      services: ['Breakfast', 'Wi-Fi'],
      price: '$905'
    },
    {
      imgSrc: '../../../imgs/la-fortuna/hotels/arenal-lodge/arenal-lodge-room3.jpeg',
      title: 'Family Standar Suite 1 with Kitchen',
      info: 'A 1 floor standard apartment perfect for a family or group of friends, the kitchen is equipped with a microwave oven, a coffee maker, and a mini fridge, a dinner room. The apartment has 2 private bedrooms and 1 bathroom each',
      services: ['Breakfast', 'Wi-Fi'],
      price: '$100'
    },
    {
      imgSrc: '../../../imgs/la-fortuna/hotels/arenal-lodge/arenal-lodge-room4.jpg',
      title: 'Panoramic Chalet',
      info: 'These large rooms, built as separate chalets, are perched on top of the hill behind the main building; they offer an incredible panoramic view of the Arenal Volcano and lake. The Chalets have one king-sized bed and one queen-sized bed, or 2 queen-sized beds',
      services: ['Jacuzzi', 'Wi-Fi'],
      price: '$100'
    }, {
      imgSrc: '../../../imgs/la-fortuna/hotels/arenal-lodge/arenal-lodge-room1.jpg',
      title: 'Junior Suites',
      info: '1 or 2 Queen Beds Enjoy the best view of the Arenal Volcano, the rainforest, the birds, and the howler monkeys from the privacy of your balcony. The Junior Suites are located next to the main building. They all have air-conditioned',
      services: ['Jacuzzi'],
      price: '$610'
    },
    {
      imgSrc: '../../../imgs/la-fortuna/hotels/arenal-lodge/arenal-lodge-room2.jpg',
      title: 'Family Suites',
      info: 'These suites are apartments with connecting doors. Family suites are equipped with a microwave oven, a coffee maker, and a mini fridge. The family suites have two bedrooms and a separate living room',
      services: ['Breakfast', 'Wi-Fi'],
      price: '$905'
    }
  ];

  const minicartItemsHtml = minicartItems
    .map(
      (item) => `
        <li class="minicart-item">
          <img class="minicart-item__img" src="${item.imgSrc}" alt="" />
          <span class="minicart-item__title">${item.title}</span>
          <p class="minicart-item__info">${item.info}</p>
          <ul class="minicart-item__services">
            <span>Included services:</span>
            ${item.services
          .map((service) => `<li>${service}</li>`)
          .join('')}
          </ul>
          <span class="minicart-item__price">${item.price}</span>
          <a class="minicart-item__link" href="#">
            <span class="visually-hidden">Click to see more</span>
          </a>
        </li>
      `
    )
    .join('');

  const formLabels = [
    { type: 'text', placeholder: 'Enter your name', labelText: 'Name' },
    { type: 'email', placeholder: 'Enter your email', labelText: 'Email' },
    { type: 'number', placeholder: 'Enter your phone number', labelText: 'Number' }
  ];

  const formLabelsHtml = formLabels
    .map(
      ({ type, placeholder, labelText }) => `
        <label class="enquiry__label">
          <input class="enquiry__input" type="${type}" placeholder="${placeholder}" required />
          ${labelText}
        </label>
      `
    )
    .join('');

  const companyLinks = ['About Us', 'FAQ', 'Contact Us'];
  const supportLinks = ['Resources', 'Discover', 'Booking'];
  const placesLinks = ['Destinations', 'Car Hire', 'Join Us'];
  const mediaClasses = ['tw', 'fb', 'inst'];

  document.body.innerHTML = `
    <header class="header">
      <a class="header__title" href="../../../index.html">Traveling.</a>
      <a class="button button--sign-in" href="">Sign In</a>
    </header>
    <main>
      <div class="description">
      <div class="description__hero">
        <img src="../../../imgs/la-fortuna/hotels/arenal-lodge/arenal-lodge-hero.jpg" alt="" class="description__hero__img">
      </div>
      <div class="description__info">
        <h1 class="description__info__title">Arenal Lodge</h1>
        <div class="description__info__btn">
          <button id="js-btn-info" class="button button--tabs">Information</button>
          <button id="js-btn-card" class="button button--tabs">Query</button>
        </div>
        <div id="js-info-container">
          <p class="description__info__text">Hotel Arenal Lodge is located in 2,000 acres of rainforest filled with exotic birds, wild animals and tropical vegetation. It offers unrivalled panoramic views of Arenal Volcano and Arenal Lake. Arenal Lodge has a bird-watching garden with hummingbirds and more species and a fitness room with sauna. There is a children’s games room, and an outdoor play area. The chalets and suites at Arenal Lodge Hotel are modern and spacious. All types of accommodation have a cable TV, and some offer astonishing views of the volcano</p>
          <ul class="minicart">${minicartItemsHtml}</ul>
        </div>
      </div>
      <div id="js-card-container" class="js-hidden">
        <form id="js-btn-form" class="enquiry" action="">
          ${formLabelsHtml}
          <label class="enquiry__label">
            <textarea class="enquiry__textarea" name="query" id="query" cols="30" rows="10" placeholder="Enter here your query"></textarea>
            Query
          </label>
          <div class="form__button--submit">
            <button class="button button--submit" type="submit">Submit</button>
          </div>
        </form>
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
}

createPage();
