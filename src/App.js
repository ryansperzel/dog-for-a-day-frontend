import React, { Component } from 'react';
import { Route } from "react-router-dom";
import DogContainer from './components/DogContainer'
import DogShow from './components/DogShow'
import { connect } from 'react-redux'
import MapContainer from './components/MapContainer'
import HomepageLayout from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import Home from './components/Home'
import NavBar from './components/NavBar'

export default class App extends Component {


  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/account" render={props => <Account {...props} />} />
        <Route exact path="/dogs" render={props => <DogContainer {...props} />} />
        <Route path="/dogs/:dogId" render={props => <DogShow {...props} />} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {selectedDog: state.dogs.selectedDog}
}
