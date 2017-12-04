import React, { Component } from 'react'
import Puppy from '../images/Puppy.mp4'
import { Button, Form, Grid, Segment, Input, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { setLocation, setLatLong } from '../actions/dogs'
import { setDemoUser } from '../actions/users'
import Login from './Login'
import Signup from './Signup'


export class Home extends Component {
  state = {
    location: "",
    submitted: false,
    login: false,
    signup: false
  }

  componentWillMount() {
    this.props.setDemoUser()
  }

  handleLogin = () => {
    this.setState({login: true})
    // this.props.history.push("/login")
  }

  handleSignup = () => {
    this.props.history.push("/signup")
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


  render() {
    return (
      <div>
      {this.state.submitted === true ? <Redirect to="/dogs"/> : null}
        <div className="background-wrap-custom">
          <video id="video-bg-elem" preload="auto" autoPlay="true" loop="loop" muted="muted">
            <source src={Puppy} type="video/mp4" />
            Video not supported
          </video>
        </div>

        {this.state.login === true ? <Login/> :
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
        </div>
        </div>
      }
        </div>
    )


}

}

function mapDispatchToProps(dispatch){
  return {setLocation: (location) => dispatch(setLocation(location)), setLatLong: (location) => dispatch(setLatLong(location)), setDemoUser: () => dispatch(setDemoUser())}
}


export default connect(null, mapDispatchToProps)(Home)
