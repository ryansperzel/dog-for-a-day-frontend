import React, { Component } from 'react'
import { fetchDogs } from '../actions/fetchDogs'
import { connect } from 'react-redux'
import DogList from './DogList'
// import { bindActionCreators } from 'redux'

export class DogContainer extends Component {


  componentDidMount() {
    this.props.fetchDogs()
  }

  render() {
    return (
      <DogList dogs={this.props.dogs}/>
    );
  }

}

function mapDispatchToProps(dispatch){
  return {fetchDogs: () => dispatch(fetchDogs())}
}

function mapStateToProps(state){
  return {dogs: state.dogs}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogContainer)
