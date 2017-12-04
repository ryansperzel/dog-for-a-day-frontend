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

export default class App extends Component {


  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/signup" render={props => <Signup {...props} />} />
        <Route exact path="/account" render={props => <Account {...props} />} />
        <Route exact path="/dogs" render={props => <DogContainer {...props} />} />
        <Route exact path="/layout" render={props => <HomepageLayout {...props} />} />
        <Route path="/dogs/:dogId" render={props => <DogShow {...props} />} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {selectedDog: state.dogs.selectedDog}
}
