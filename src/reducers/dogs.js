export function dogsReducer(state = {allDogs: [], selectedDog: null}, action) {
  switch(action.type) {


    case "ADD_DOG":
      return {...state, allDogs: [...state.allDogs, action.payload]}

    case "LOADING":
      console.log("Loading")
      return {...state}

    case "SELECT_DOG":
      console.log("selecting dog")
      return {...state, selectedDog: action.payload}



    default:
      return {...state}
  }
}
