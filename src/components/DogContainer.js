import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { fetchShelters, setSelectedShelter } from '../actions/shelters'
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
        <div className="dog-container-grid">
          <div className="on-right">
            <DogList className="content" selectedShelter={this.props.selectedShelter} setSelectedDog={this.props.setSelectedDog} dogs={this.props.dogs}/>
          </div>
          <div className="on-left">
            {this.props.latitude !== null && this.props.shelters.length !== 0 ? <GoogleApiWrapper setSelectedShelter={this.props.setSelectedShelter} latitude={this.props.latitude} shelters={this.props.shelters} longitude={this.props.longitude}/>
            :
            null}
          </div>
        </div>

    );
  }

}

function mapDispatchToProps(dispatch){
  return {fetchShelters: (location) => dispatch(fetchShelters(location)), fetchDogs: (location) => dispatch(fetchDogs(location)), setSelectedDog: (id) => dispatch(setSelectedDog(id)), setSelectedShelter: (shelter) => dispatch(setSelectedShelter(shelter)) }
}

function mapStateToProps(state){
  return {dogs: state.dogs.allDogs, shelters: state.shelters.allShelters, location: state.shelters.location, selectedDog: state.dogs.selectedDog, selectedShelter: state.shelters.selectedShelter, latitude: state.shelters.latitude, longitude: state.shelters.longitude}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogContainer)
