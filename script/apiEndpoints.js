const apiUrl = "https://640b957794ce1239b09c0b5b.mockapi.io/api/";


const hotel = [];

const fetchDestination = async () => {
	try {
		let response = await fetch(`${apiUrl}destination`)
		if (response.ok) {
			let responseJson = await response.json()
			return responseJson
		}
	} catch(error) {
		console.log(error)
	}
}

const fetchHotel = async () => {
	try {
		let response = await fetch(`${apiUrl}hotel`)
		if (response.ok) {
			let responseJson = await response.json()
			// console.log(responseJson)
			return responseJson
		}
	} catch(error) {
		console.log(error)
	}
}
const destination = fetchDestination();

// destination.push(fetchDestination())
// console.log(destination)

// export {destination, hotel}