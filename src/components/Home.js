import React, { Component } from 'react'


export default class Home extends Component {
  state = {
    location: ""
  }


  handleChange = (event) => {
    this.setState({
      location: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Why hello there")

  }


  render() {
    return (
      <div className="big-search-form">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.location}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}
