const urlDestination = new URLSearchParams(window.location.search).get('id')

// Information for every destination

const printDestination = () => {
  fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/destination', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(element => {
    // Needed elements from DOM
    const container = document.querySelector('#js-info-container')
    const headTitle = document.querySelector('title');
    const title = document.querySelector('.description__info__title');
    const heroImage = document.querySelector('.description__hero__img');

    //Clear data from container
    container.innerHTML = '';

    // Find Destination based con id from API
    const destination = element.find(element => element.id == urlDestination)

    // Adding data into DOM
    headTitle.innerHTML = `Traveling. | ${destination.name}` // Browser Tab Name
    title.innerHTML = destination.name;
    heroImage.src = `${destination.heroImage}`

    container.insertAdjacentHTML(
      'afterbegin',
      `<p class="description__info__text">${destination.description}</p>`
    )
  }).catch(error => {
   // handle error
  })
}

const printHotelCard = () => {
  fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/hotel', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(element => {
    // Needed elements from DOM
    const container = document.querySelector('#js-info-container')
    
    //Clear data from container
    container.innerHTML = '';

    // Find Destination based con id from API
    const hotels = element.filter(element => {if (element.idDestination == urlDestination){return element}})
    console.log(hotels)
    

    // Creating <li> element
    let hotelInfo = '';
    hotels.forEach(element => {
      hotelInfo +=
      `<li class="minicart-item">
          <img class="minicart-item__img" src="${element.cardImage}" alt="">
          <span class="minicart-item__title">${element.name}</span>
          <p class="minicart-item__info">${element.description}</p>
          <a class="minicart-item__link" href="..//hotel/hotel.html?search=${element.name}"><span class="visually-hidden">Click to see more</span></a>
      </li>`
    });

    // Adding data into DOM

    container.insertAdjacentHTML(
      'afterbegin',
      `<ul class="minicart">${hotelInfo}</ul>`
    )
  }).catch(error => {
   // handle error
  })
}
printHotelCard()
// printDestination()
// export {printDestination, printHotelCard}