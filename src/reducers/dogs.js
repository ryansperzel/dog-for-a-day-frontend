export function dogsReducer(state = {dogs: [], selectedDog: null}, action) {
  switch(action.type) {


    case "ADD_DOG":
      return {...state, dogs: [...state.dogs, action.payload]}

    case "LOADING":
      console.log("Loading")
      return {...state}

    case "SELECT_DOG":
      console.log("selecting dog")
      console.log(action)
      return {...state, selectedDog: action.payload}

    default:
      return {...state}
  }
}
