import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Home from './components/Home'
import DogContainer from './components/DogContainer'
import DogShow from './components/DogShow'
import { connect } from 'react-redux'

export default class App extends Component {


  render() {
    return (
      <div className="App">
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/dogs" render={props => <DogContainer {...props} />} />
      </div>
    );
  }
}
