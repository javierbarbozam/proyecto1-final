fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/destination', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(destination => {
	const container = document.querySelector('.destination');
	destination.forEach(element => {
		container.insertAdjacentHTML(
			"beforeend",
			`<li class="destination-item">
				<img class="destination-item__img" src=${element.cardImage}>
				<span class="destination-item__title">${element.name}</span>
				<a class=""><span class="visually-hidden">Click to see more</span></a>
			</li>`

			// need to add anchor url to go to every destination hotel (api?)
		)
	});	
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})