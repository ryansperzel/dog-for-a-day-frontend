export function setUser() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users/1')
      .then(res => res.json())
      .then(json => dispatch({
        type: "SET_USER",
        payload: json
      }))
  }
}
