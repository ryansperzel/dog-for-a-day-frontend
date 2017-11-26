import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { fetchShelters } from '../actions/shelters'
import { fetchDogs, setSelectedDog } from '../actions/dogs'
import Home from './Home'
import { connect } from 'react-redux'
import DogList from './DogList'
import DogShow from './DogShow'
import GoogleApiWrapper from './MapContainer'
// import { bindActionCreators } from 'redux'

export class DogContainer extends Component {

  state = {
    selectedDog: false
  }


  componentDidMount() {
    this.props.fetchShelters(this.props.location)
    this.props.fetchDogs(this.props.location)
  }


  render() {
    return (
      <div>
        <DogList setSelectedDog={this.props.setSelectedDog} dogs={this.props.dogs}/>
      </div>

    );
  }

}

function mapDispatchToProps(dispatch){
  return {fetchShelters: (location) => dispatch(fetchShelters(location)), fetchDogs: (location) => dispatch(fetchDogs(location)), setSelectedDog: (id) => dispatch(setSelectedDog(id))}
}

function mapStateToProps(state){
  return {dogs: state.dogs.allDogs, location: state.shelters.location, selectedDog: state.dogs.selectedDog}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogContainer)
