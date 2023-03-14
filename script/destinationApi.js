const idDestination = new URLSearchParams(window.location.search).get('id')


fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/destination', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }

}).then(element => {
	
	const title = document.querySelector('.description__info__title');
	const description = document.querySelector('.description__info__text');
	// const title = document.querySelector('.description__info__title');
	
	const destination = element.find(element => element.id == idDestination)
	// element.forEach(element => {
	// 	if (element.id == idDestination) {
			title.innerHTML = destination.name
	// 	}

	// });	
}).catch(error => {
  // handle error
})