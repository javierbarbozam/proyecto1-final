
const idDestination = new URLSearchParams(window.location.search).get('id')



fetch('https://640b957794ce1239b09c0b5b.mockapi.io/api/destination', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }

}).then(element => {
	
	const title = document.getElementsByTagName('h1');
	
	const destination = element.find(element => element.id == idDestination)
	
	title.insertAdjacentHTML(
		'afterbegin',
		`${destination.name}`
	)
}
).catch(error => {
  // handle error
})