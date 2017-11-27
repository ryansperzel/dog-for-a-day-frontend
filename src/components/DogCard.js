import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from './Home'
import '../index.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


export default class DogList extends Component {


  handleClick = (event) => {
    event.preventDefault()
    this.props.setSelectedDog(parseInt(this.props.dog.id.$t))
  }

  render() {
    const linkURL = `/dogs/${this.props.dog.id.$t}`
    return(

      <Link to={linkURL} className="textWithBlurredBg">
          <img className="dog-image" alt="" src={this.props.dog.media.photos.photo[3].$t} />
          <h2>{this.props.dog.name.$t}</h2>
      </Link>

    )
  }
}
