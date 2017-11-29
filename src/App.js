import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home'
import DogContainer from './components/DogContainer'
import DogShow from './components/DogShow'
import { connect } from 'react-redux'
import MapContainer from './components/MapContainer'
import HomepageLayout from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'


export default class App extends Component {


  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <HomepageLayout {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route exact path="/home" render={props => <Home {...props} />} />
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
