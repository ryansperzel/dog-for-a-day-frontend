import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDemoUser } from '../actions/users'
import BigCalendar from './BigCalendar'


export class Account extends Component {

  componentWillMount(){
    this.props.setDemoUser()
  }

  render() {


    return (
      <div>
        <h1>Hello, {this.props.currentUser.first_name}</h1>
        <h3>Your Past Puppy Pals</h3>
        <BigCalendar/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.users.currentUser}
}

function mapDispatchToProps(dispatch){
  return {setDemoUser: () => dispatch(setDemoUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
