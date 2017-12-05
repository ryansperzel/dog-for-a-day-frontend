export function usersReducer(state = {currentUser: {}}, action) {
  switch(action.type) {

    case "SET_DEMO_USER":
      return {...state, currentUser: action.payload}

    case "DELETE_APPOINTMENT":
      const newAppointments = state.currentUser.appointments.filter(app => {
        return app.id !== action.payload
      })
      return {...state, currentUser: {...state.currentUser, appointments: [...newAppointments]}}

    case "ADD_APPOINTMENT":
      return {...state, currentUser: {...state.currentUser, appointments: [...state.currentUser.appointments, action.payload]}}

    default:
      return {...state}
  }

}
