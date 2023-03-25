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
				<img class="destination-item__img" src="${element.cardImage}" alt="">
				<span class="destination-item__title">${element.name}</span>
				<a class="destination-item__link" href="./destination/destination.html?id=${element.id}"><span class="visually-hidden">Click to see more</span></a>
			</li>`
		)
	});	
  // Do something with the list of tasks
}).catch(error => {
  // handle error
})