import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import DogCard from './DogCard'
import { Item, Dimmer, Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Logo from '../images/dogicon4.png'
import Derp from '../images/derp.png'
var cuid = require('cuid');

export default class DogList extends Component {

  state = {
    shelterSelected: false,
    mounted: false
  }

  componentDidMount(){
    this.setState({mounted: true})
  }


  componentWillReceiveProps(nextProps) {
    if(nextProps.selectedShelter !== null) {
      this.setState({shelterSelected: true})
    }
  }


  render() {



    if (this.props.dogs.length > 0 && this.props.selectedShelter !== null) {
      let filteredDogs = this.props.dogs[0].pet.filter(dog => {
        return dog.shelterId.$t === this.props.selectedShelter.id.$t
      })
      // let mappedDogs = filteredDogs.map(dog => (<DogCard setSelectedDog={this.props.setSelectedDog} key={cuid()} dog={dog} />))
      let mappedDogs = filteredDogs.map((dog, idx) => {
        let dogURL = `/dogs/${dog.id.$t}`
        return (
          <Item as={Link} to={dogURL} key={idx}>
          <Item.Image size='small' src={dog.media.photos === undefined ? null : dog.media.photos.photo[3].$t} />
          <Item.Content>
          <Item.Header as='a' className="dog-list-card-name" onClick={this.testFunc}>{dog.name.$t}</Item.Header>
          <Item.Meta>
          <span>{dog.sex.$t}</span>
          </Item.Meta>
          <Item.Description>
          </Item.Description>
          </Item.Content>
          </Item>
        )
      })
      return(
        <div>
        {filteredDogs.length > 0 ? <Item.Group divided>{mappedDogs}</Item.Group> :
        <div className="sorry-message">
          <h1>Sorry, there are no pups available in that shelter! Please check back again later!</h1>
          <br/><br/>
          <img src={Derp} alt='' />
        </div>}

        </div>
        )
    } else {
      let mappedDogs = null
      return(
        <div className="dog-list-null">
          <img src={Logo} alt='' />
          <br/>
          <br/>
          <h1>Please select a shelter to get started!</h1>
        </div>
        )
    }

    }
  }
