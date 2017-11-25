import { petKey } from '../keys/keys.js'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'



export function fetchShelters(location) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    return fetch(`${proxyurl}http://api.petfinder.com/shelter.find?key=${petKey}&location=${location}&format=json`)
      .then(response => response.json())
      .then(json => dispatch({
        type: "ADD_SHELTER",
        payload: json.petfinder.shelters
      }))
      .then(shelters => seedShelters(shelters))
  }
}

// Saves fetch result dogs to the database

function seedShelters(shelters) {
  console.log(shelters)
  return fetch("http://localhost:3000/api/v1/shelters", {
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({shelters})
    })
  }
