import React, { Component } from 'react'

export default class DogShow extends Component {


  componentWillMount() {
    console.log(this.props)
  }


  render() {
    return(
      <p>Hello World</p>
    )
  }
}
