//desglosar url 
const getUrl = new URLSearchParams(window.location.search)
let id = getUrl.get('id');
id = parseInt(id)

const loadDestinations = () => {
  fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/destination', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
  }).then(destinations => {
    const container = document.querySelector('.destination');
    destinations[id].gallery.forEach(element => {
      const destinationItem = `
        <li class="destination-item">
          <img class="destination-item__img" src="${element}" alt="${destinations[id]}">
        </li>
      `;
      container.insertAdjacentHTML('beforeend', destinationItem);
      console.log(destinations[id].gallery)
    });
  }).catch(error => {
    // handle error
  })
}

loadDestinations();

