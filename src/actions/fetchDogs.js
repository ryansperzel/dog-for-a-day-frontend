import { petKey, mapKey } from '../keys.js'


const proxyurl = 'https://cors-anywhere.herokuapp.com/'


export function fetchDogs() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    return fetch(`${proxyurl}http://api.petfinder.com/pet.find?key=${petKey}&location=New+York,+NY&animal=dog&format=json`)
      .then(response => response.json())
      .then(json => dispatch({
        type: "ADD_DOG",
        payload: json.petfinder.pets
      }))
      .then(dogs => seedDogs(dogs))
  }
}

function seedDogs(dogs) {
  return fetch("http://localhost:3000/api/dogs", {
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      something: dogs
      })
    })
  }
