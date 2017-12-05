export function dogsReducer(state = {allDogs: [], selectedDog: null, disabledDates: []}, action) {
  switch(action.type) {


    case "ADD_DOG":
      return {...state, allDogs: [...state.allDogs, action.payload]}

    case "LOADING":
      return {...state}

    case "SELECT_DOG":
      return {...state, selectedDog: action.payload}

    case "SET_DISABLED_DATES":
      return {...state, disabledDates: action.payload}



    default:
      return {...state}
  }
}
