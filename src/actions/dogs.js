import { petKey } from '../keys/keys.js'
import { geocoder } from '../keys/keys'
const proxyurl = 'https://cors-anywhere.herokuapp.com/'


export function fetchDogs(location) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    return fetch(`${proxyurl}http://api.petfinder.com/pet.find?key=${petKey}&location=${location}&animal=dog&format=json`)
      .then(response => response.json())
      .then(json => dispatch({
        type: "ADD_DOG",
        payload: json.petfinder.pets
      }))
      .then(dogs => seedDogs(dogs))
  }
}

  // Saves fetch result dogs to the database

  function seedDogs(dogs) {
    return fetch("http://localhost:3000/api/v1/dogs", {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({dogs})
      })
    }

    export function setSelectedDog(id) {
      return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/dogs/${id}`)
        .then(response => response.json())
        .then(json => dispatch({
          type: "SELECT_DOG",
          payload: json
        }))
      }
    }



  export function setLocation(location) {
    return {
      type: "SET_LOCATION",
      payload: location
    }
  }

  export function setLatLong(location) {
    return (dispatch) => {
      return fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${geocoder}`)
        .then(response => response.json())
        .then(json => dispatch({
          type: "SET_LAT_LONG",
          payload: json.results[0].geometry.location
        }))
    }
  }
