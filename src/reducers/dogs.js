export function dogsReducer(state = {dogs: [], shelters: [], selectedDog: null, location: null}, action) {
  switch(action.type) {


    case "ADD_DOG":
      return {...state, dogs: [...state.dogs, action.payload]}

    case "LOADING":
      console.log("Loading")
      return {...state}

    case "SELECT_DOG":
      console.log("selecting dog")
      return {...state, selectedDog: action.payload}

    case "SET_LOCATION":
      console.log("setting location")
      return {...state, location: action.payload, selectedDog: null}

    case "ADD_SHELTER":
      return {...state, shelters: [...state.shelters, action.payload]}


    default:
      return {...state}
  }
}
