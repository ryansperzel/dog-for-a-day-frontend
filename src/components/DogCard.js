import React, { Component } from 'react'
import '../index.css'

export default class DogList extends Component {


  render() {
    return(
      
      <div className="card">
        <img className="cardpic" alt="" src={this.props.dog.media.photos.photo[3].$t} />
        <div className="container">
          <h4><b>{this.props.dog.name.$t}</b></h4>
          <p></p>
        </div>
      </div>
    )
  }
}
