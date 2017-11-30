import React, { Component } from 'react'
import DogCard from './DogCard'
var cuid = require('cuid');

export default class DogList extends Component {

  state = {
    shelterSelected: false
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.selectedShelter !== null) {
      this.setState({shelterSelected: true})
    }
  }


  render() {

    if (this.props.dogs.length > 0 && this.props.selectedShelter !== null) {
      let filteredDogs = this.props.dogs[0].pet.filter(dog => {
        return dog.shelterId.$t === this.props.selectedShelter.id.$t
      })
      console.log(filteredDogs)
      let mappedDogs = filteredDogs.map(dog => (<DogCard setSelectedDog={this.props.setSelectedDog} key={cuid()} dog={dog} />))
      return(
        <div>
          {mappedDogs}
        </div>
        )
    } else {
      let mappedDogs = null
      return(
        <div>
          {mappedDogs}
        </div>
        )
    }

    }
  }
