import React, { Component } from 'react'
import { Button, Form, Input, Menu, Dimmer, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { setLocation, setLatLong , fetchDogs} from '../actions/dogs'
import { fetchShelters } from '../actions/shelters'
import { setDemoUser } from '../actions/users'
import { petKey } from '../keys/keys.js'
import Login from './Login'
import Signup from './Signup'
import Terrance from '../images/terrance.png'
import Puppy from '../images/Puppy.mp4'
import Drinking from '../images/Drinking.mp4'
import Walking from '../images/Walking.mp4'
import Grass from '../images/Grass.mp4'
import Tennis from '../images/Tennis.mp4'
import Looking from '../images/Looking.mov'



const proxyurl = 'https://cors-anywhere.herokuapp.com/'



export class Home extends Component {
  state = {
    location: "",
    loading: false,
    submitted: false,
    home: true,
    login: false,
    signup: false
  }


  handleLogin = () => {
    this.setState({login: true, signup: false, home: false})
    // this.props.history.push("/login")
  }

  handleSignup = () => {
    this.setState({signup: true, home: false, login: false})
  }

  handleHome = () => {
    this.setState({signup: false, home: true, login: false})
  }




  handleChange = (event) => {
    this.setState({
      location: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${geocoder}`)
      .then(response => response.json())
      .then(json => {
        
      })
    this.setState({loading: true})
    this.props.setLocation(event.target[0].value)
    this.props.setLatLong(event.target[0].value)
    this.setState({submitted: true})
  }


  hitTerrance = () => {
    this.props.setDemoUser()
    this.props.history.push("/account")
  }

  render() {

    const videos = [Puppy, Drinking, Looking, Walking, Tennis, Grass]
    const randomVid = videos[Math.floor(Math.random() * videos.length)];

    return (
      <div>
      {this.state.submitted === true ? <Redirect to="/dogs"/> : null}
      {this.state.loading === true ?
        <Dimmer active>
          <Loader size='huge'>Loading your puppers</Loader>
        </Dimmer>
      : null}
        <div className="background-wrap-custom">
          <video id="video-bg-elem" preload="auto" autoPlay="true" loop="loop" muted="muted">
            <source src={randomVid} type="video/mp4" />
            Video not supported
          </video>
        </div>

        {this.state.home === true ?
              <div>


                <div className="content-custom">
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item position='right'>
                    <Button as='a' onClick={this.handleLogin} inverted>Log in</Button>
                    <Button as='a' onClick={this.handleSignup} inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu>
                  <h1>Dog for a Day</h1>
                  <p>Meet your new best friend.</p>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <Form className="search-form" onSubmit={this.handleSubmit}>
                      <Form.Group inline>
                        <Form.Field control={Input} width={4} fluid icon='marker' iconPosition='left' placeholder='City, State' onChange={this.handleChange} value={this.state.location}/>
                        <Form.Button width={1} fluid icon="paw" type="submit"></Form.Button>
                      </Form.Group>
                  </Form>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  {/*}<a href="javascript:;">
                    <img src={Terrance} className="terrance" onClick={this.hitTerrance} alt="" height="75" width="75" />
                  </a>*/}
                </div>
              </div>
                 :
                  null}

        {this.state.login === true ? <Login handleHome={this.handleHome} handleSignup={this.handleSignup}/> : null}
        {this.state.signup === true ? <Signup handleHome={this.handleHome} handleLogin={this.handleLogin}/> : null}
        </div>
    )


}

}

function mapDispatchToProps(dispatch){
  return {fetchShelters: (location) => dispatch(fetchShelters(location)), fetchDogs: (location) => dispatch(fetchDogs(location)), setLocation: (location) => dispatch(setLocation(location)), setLatLong: (location) => dispatch(setLatLong(location)), setDemoUser: () => dispatch(setDemoUser())}
}


export default connect(null, mapDispatchToProps)(Home)
