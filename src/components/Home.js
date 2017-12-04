import React, { Component } from 'react'
import { Button, Form, Grid, Segment, Input, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { setLocation, setLatLong } from '../actions/dogs'
import { setDemoUser } from '../actions/users'
import Login from './Login'
import Signup from './Signup'
import Terrance from '../images/terrance.png'
import River from '../images/River.mp4'
import Puppy from '../images/Puppy.mp4'
import Drinking from '../images/Drinking.mp4'
import Walking from '../images/Walking.mp4'
import Grass from '../images/Grass.mp4'
import Tennis from '../images/Tennis.mp4'
import Looking from '../images/Looking.mov'





export class Home extends Component {
  state = {
    location: "",
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




  handleChange = (event) => {
    this.setState({
      location: event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.setLocation(event.target[0].value)
    this.props.setLatLong(event.target[0].value)
    this.setState({submitted: true})
  }


  hitTerrance = () => {
    this.props.setDemoUser()
    this.props.history.push("/account")
  }

  render() {

    const videos = [River, Puppy, Drinking, Looking, Walking, Tennis, Grass]
    const randomVid = videos[Math.floor(Math.random() * videos.length)];

    return (
      <div>
      {this.state.submitted === true ? <Redirect to="/dogs"/> : null}
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
                  <p>Lorem ipsum some other shit.</p>
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
                  <a href="javascript:;">
                    <img src={Terrance} className="terrance" onClick={this.hitTerrance} alt="" height="75" width="75" />
                  </a>
                </div>
              </div>
                 :
                  null}

        {this.state.login === true ? <Login handleSignup={this.handleSignup}/> : null}
        {this.state.signup === true ? <Signup handleLogin={this.handleLogin}/> : null}
        </div>
    )


}

}

function mapDispatchToProps(dispatch){
  return {setLocation: (location) => dispatch(setLocation(location)), setLatLong: (location) => dispatch(setLatLong(location)), setDemoUser: () => dispatch(setDemoUser())}
}


export default connect(null, mapDispatchToProps)(Home)
