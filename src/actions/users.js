export function setDemoUser() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/1')
      .then(res => res.json())
      .then(json => dispatch({
        type: "SET_DEMO_USER",
        payload: json
      }))
  }
}

export function deleteAppointment(id) {
  return (dispatch) => {
    dispatch({
      type: "DELETE_APPOINTMENT",
      payload: id
    })
  }
}

export function addAppointment(appointment) {
  return (dispatch) => {
    dispatch({
      type: "ADD_APPOINTMENT",
      payload: appointment
    })
  }
}
