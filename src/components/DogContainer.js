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
        <div className="on-bottom">
          <DogList setSelectedDog={this.props.setSelectedDog} dogs={this.props.dogs}/>
        </div>
        <div className="on-top">
          {/*{this.props.latitude !== null && this.props.shelters.length !== 0 ? <GoogleApiWrapper latitude={this.props.latitude} shelters={this.props.shelters} longitude={this.props.longitude}/>
          :
          null}*/}
        </div>

      </div>

    );
  }

}

function mapDispatchToProps(dispatch){
  return {fetchShelters: (location) => dispatch(fetchShelters(location)), fetchDogs: (location) => dispatch(fetchDogs(location)), setSelectedDog: (id) => dispatch(setSelectedDog(id))}
}

function mapStateToProps(state){
  return {dogs: state.dogs.allDogs, shelters: state.shelters.allShelters, location: state.shelters.location, selectedDog: state.dogs.selectedDog, latitude: state.shelters.latitude, longitude: state.shelters.longitude}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogContainer)
