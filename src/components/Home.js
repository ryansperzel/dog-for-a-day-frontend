import React, { Component } from 'react'
import { Button, Form, Grid, Segment, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { setLocation, setLatLong } from '../actions/dogs'
import { setUser } from '../actions/users'




export class Home extends Component {
  state = {
    location: "",
    submitted: false,
  }

  componentWillMount() {
    this.props.setUser()
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
      <div className="search-page-grid">
      {this.state.submitted === true ? <Redirect to="/dogs"/> : null}
            <div className="form-div">
              <Form onSubmit={this.handleSubmit}>
                {/*<Segment textAlign="center" className="segment">*/}
                  <h2>Connecting People to Shelter Dogs</h2>
                  <br/>
                  <div className="search-form">
                  <Form.Group inline>
                    <Form.Field control={Input} width={12} fluid icon='marker' iconPosition='left' placeholder='City, State' onChange={this.handleChange} value={this.state.location}/>
                    <Form.Button width={4} fluid type="submit">Search</Form.Button>
                  </Form.Group>
                </div>
                {/*</Segment>*/}
              </Form>
            </div>
        </div>
    );
  }
}


function mapDispatchToProps(dispatch){
  return {setLocation: (location) => dispatch(setLocation(location)), setLatLong: (location) => dispatch(setLatLong(location)), setUser: () => dispatch(setUser())}
}



export default connect(null, mapDispatchToProps)(Home)
