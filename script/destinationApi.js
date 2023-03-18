const idDestination = new URLSearchParams(window.location.search).get('id')


fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/destination', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }

}).then(element => {
	
	// Needed elements from DOM
	const headTitle = document.querySelector('title');
	const title = document.querySelector('.description__info__title');
	const description = document.querySelector('.description__info__text');
	const heroImage = document.querySelector('.description__hero__img');

	// Find Destination based con id from API
	const destination = element.find(element => element.id == idDestination)

	// Adding data into DOM
	headTitle.innerHTML = `Traveling. | ${destination.name}` // Browser Tab Name
	title.innerHTML = destination.name;
	description.innerHTML = destination.description
	heroImage.src = `${destination.heroImage}`
}).catch(error => {
  // handle error
})