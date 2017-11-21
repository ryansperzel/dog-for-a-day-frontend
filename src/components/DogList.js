import React, { Component } from 'react'
import DogCard from './DogCard'
var cuid = require('cuid');

export default class DogList extends Component {


  render() {
    if (this.props.dogs.length > 0) {
      let mappedDogs = this.props.dogs[0].pet.map(dog => (<DogCard key={cuid()} dog={dog} />))
      console.log(mappedDogs, this.props.dogs)
      return(
        <div>
          {mappedDogs}
        </div>
        )
    } else {
      let mappedDogs = null
      console.log(mappedDogs)
      return(
        <div>
          {mappedDogs}
        </div>
        )
    }

    }
  }
