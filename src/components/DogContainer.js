import React, { Component } from 'react'
import { fetchDogs } from '../actions/fetchDogs'
import { setSelectedDog } from '../actions/dogs'
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
    this.props.fetchDogs()
  }

  setSelectedDog = (id) => {
    this.setState({
      selectedDog: id
    })
  }

  render() {
    return (
      <div>
        {this.state.selectedDog === false ?
          <DogList setSelectedDog={this.setSelectedDog} dogs={this.props.dogs}/>
          :
          <GoogleApiWrapper />
        }
      </div>

    );
  }

}

function mapDispatchToProps(dispatch){
  return {fetchDogs: () => dispatch(fetchDogs()), setSelectedDog: (id) => dispatch(setSelectedDog(id))}
}

function mapStateToProps(state){
  return {dogs: state.dogs}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogContainer)
