import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from './Home'
import '../index.css'
import { withRouter } from 'react-router-dom'


export default class DogList extends Component {


  handleClick = (event) => {
    event.preventDefault()
    console.log(event.target.parentNode)
  }

  render() {
    return(

        <a onClick={this.handleClick} href="" className="textWithBlurredBg">
          <img className="dog-image" alt="" src={this.props.dog.media.photos.photo[3].$t} />
          <h2>{this.props.dog.name.$t}</h2>
          <h1></h1>
        </a>

    )
  }
}
