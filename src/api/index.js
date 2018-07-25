// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3000'

let getApartments = function() {
    return fetch(BASE + '/apartments')
        .then((resp) => {
            let json = resp.json()
            console.log(json);
            return json
        })
}
let getApartment = function(id) {
	return fetch(BASE + '/apartments/' + id)
	.then((resp) => {
		let json = resp.json()
		return json
	})
}

export  {
    getApartments,
    getApartment
}
