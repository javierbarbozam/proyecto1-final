const urlDestination = new URLSearchParams(window.location.search).get('id')
const urlHotel = new URLSearchParams(window.location.search).get('search')

// Needed elements from DOM
const container = document.querySelector('#js-info-container')
const headTitle = document.querySelector('title');
const title = document.querySelector('.description__info__title');
const heroImage = document.querySelector('.description__hero__img');

const pageInfo = () => {
  if (urlDestination) {
    fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/destination', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(element => {
      
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
  } else { // This part of the code is to print all data from the hotel
    fetch(`https://640b957794ce1239b09c0b5b.mockapi.io/api/hotel?search=${urlHotel}`, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(element => {
      const hotel = element[0];

      // Add rooms into variable
      let rooms = '';

      hotel.room.forEach(element => {

        // Room features name
        let featureName = '';

        // Establish Room features price variables
        let normalPrice = 0;
        let discountPrice = 0;

        // Name & pricing features function
        const roomFeatures = () => {

          // Discount condition
          if (element.discount > 0) {
            element.features.forEach(service => {
              normalPrice += service.price
              
              // Room feature name
              featureName += 
              `<li>${service.name}</li>`
            })
            discountPrice = Math.round(normalPrice - (normalPrice * element.discount))
          } else {
            element.features.forEach(service => {
              normalPrice += service.price

              // Room feature name
              featureName += 
              `<li>${service.name}</li>`
            })
          }
        }
        roomFeatures()

        // Create HTML
        const roomHTML = () => {
          if(element.discount > 0) {
            rooms +=
            `<li class="minicart-item">
              <img class="minicart-item__img" src="${element.image}" alt="">
              <span class="minicart-item__title">${element.name}</span>
              <p class="minicart-item__info">${element.description}</p>
              <ul class="minicart-item__services">
                <span>Included services:</span>
                ${featureName}
              </ul>
              <div class="minicart-item__pricing">
                <span class="minicart-item__price minicart-item__price--discount">$${normalPrice}</span>
                <span class="minicart-item__price minicart-item__price--new">$${discountPrice}</span>
              </div>
              <a class="minicart-item__link" href="#"><span class="visually-hidden">Click to see more</span></a>
            </li>`
          } else {
            rooms +=
            `<li class="minicart-item">
              <img class="minicart-item__img" src="${element.image}" alt="">
              <span class="minicart-item__title">${element.name}</span>
              <p class="minicart-item__info">${element.description}</p>
              <ul class="minicart-item__services">
                <span>Included services:</span>
                ${featureName}
              </ul>
              <div class="minicart-item__pricing">
                <span class="minicart-item__price">$${normalPrice}</span>
              </div>
              <a class="minicart-item__link" href="#"><span class="visually-hidden">Click to see more</span></a>
            </li>`
          }
        }
        roomHTML()
      })

      // Adding data into DOM
      headTitle.innerHTML = `Traveling. | ${hotel.name}` // Browser Tab Name
      title.innerHTML = hotel.name;
      heroImage.src = `../${hotel.image}`

      container.insertAdjacentHTML(
        'afterbegin',
        `<p class="description__info__text">${hotel.description}</p>
        <ul class="minicart">${rooms}</ul>`
      )
    }).catch(error => {
    // handle error
    })
  }
}

const pageCta = () => {
  if (urlDestination) {
    fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/hotel', {
      method: 'GET',
      headers: {'content-type':'application/json'},
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
    }).then(element => {
      // Find Destination based con id from API
      const hotels = element.filter(element => {if (element.idDestination == urlDestination){return element}})
      
      // Creating <li> element
      let hotelInfo = '';
      hotels.forEach(element => {
        hotelInfo +=
        `<li class="minicart-item">
            <img class="minicart-item__img" src="../${element.image}" alt="">
            <span class="minicart-item__title">${element.name}</span>
            <p class="minicart-item__info">${element.description}</p>
            <a class="minicart-item__link" href="../destination/destination.html?search=${element.name}"><span class="visually-hidden">Click to see more</span></a>
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
  } else {
    container.innerHTML =
    `<form id="js-btn-form" class="enquiry" action="">
      <label class="enquiry__label" for="name"><input class="enquiry__input" type="text" name="" id="" placeholder="Enter your name" required>Name</label>
      <label class="enquiry__label" for="email"><input class="enquiry__input" type="email" name="" id="" placeholder="Enter your email" required>Email</label>
      <label class="enquiry__label" for=""><input class="enquiry__input" type="number" name="" id="" placeholder="Enter your phone number" required>Number</label>
      <label class="enquiry__label" for="text"><textarea class="enquiry__textarea" name="query" id="query" cols="30" rows="10" placeholder="Enter here your query"></textarea>Query</label>
      <div class="form__button--submit">
        <button class="button button--submit" type="submit">Submit</button>
      </div>
    </form>`
  }
}

export {pageInfo, pageCta, urlHotel, urlDestination}