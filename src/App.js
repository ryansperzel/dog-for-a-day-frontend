import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home'
import DogContainer from './components/DogContainer'
import DogShow from './components/DogShow'
import { connect } from 'react-redux'
import MapContainer from './components/MapContainer'

export default class App extends Component {


  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/dogs" render={props => <DogContainer {...props} />} />
        <Route path="/dogs/:dogId" render={props => <DogShow {...props} />} />
        <Route exact path="/map" render={props => <MapContainer {...props} />} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {selectedDog: state.dogs.selectedDog}
}
