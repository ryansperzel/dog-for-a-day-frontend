import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDemoUser } from '../actions/users'
import UserCalendar from './UserCalendar'
import DeletionModal from './DeletionModal'


export class Account extends Component {


  state = {
    calendarDog: null
  }

  componentWillMount(){
    this.props.setDemoUser()
  }

  setCalendarDog = (event) => {
    console.log(event)
    this.setState({calendarDog: event.title}, console.log(this.state.calendarDog))
  }

  render() {

    return (
      <div>
        <h1>Hello, {this.props.currentUser.first_name}</h1>
        <h3>Your Past Puppy Pals</h3>
        <UserCalendar setCalendarDog={this.setCalendarDog}/>
        <DeletionModal calendarDog={this.state.calendarDog}/>
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
