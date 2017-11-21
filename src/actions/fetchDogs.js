const key = ''
const proxyurl = 'https://cors-anywhere.herokuapp.com/'


export function fetchDogs() {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    return fetch(`${proxyurl}http://api.petfinder.com/pet.find?key=${key}&location=New+York,+NY&animal=dog&format=json`)
      .then(response => response.json())
      .then(json => dispatch({
        type: "ADD_DOG",
        payload: json.petfinder.pets
      }))
  }
}
