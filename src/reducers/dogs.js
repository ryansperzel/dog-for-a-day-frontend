export function dogsReducer(state = {dogs: []}, action) {
  switch(action.type) {


    case "ADD_DOG":
      return {...state, dogs: [...state.dogs, action.payload]}

    case "LOADING":
      console.log("I'm rolling over")
      return {...state}

    default:
      return {...state}
  }
}
