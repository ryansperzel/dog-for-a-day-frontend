import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { setLocation, setLatLong } from '../actions/dogs'




export class Home extends Component {
  state = {
    location: "",
    submitted: false,
  }




  handleChange = (event) => {
    this.setState({
      location: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.setLocation(event.target[0].value)
    this.props.setLatLong(event.target[0].value)
    this.setState({submitted: true})
  }


  render() {
    return (
      <div className="big-search-form">
        {this.state.submitted === true ? <Redirect to="/dogs"/> : null}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="City, State" type="text" value={this.state.location}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return {setLocation: (location) => dispatch(setLocation(location)), setLatLong: (location) => dispatch(setLatLong(location))}
}



export default connect(null, mapDispatchToProps)(Home)
