import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDemoUser } from '../actions/users'
import UserCalendar from './UserCalendar'
import DeletionModal from './DeletionModal'

const testDog = {
  name: "Tester",
  photo: "something fake"
}


export class Account extends Component {

  state = {
    calendarDog: testDog,
  }

  componentWillMount(){
    this.props.setDemoUser()
  }


  setCalendarDog = (event) => {
    this.setState({calendarDog: event.appointment}, console.log(this.state.calendarDog))
  }

  clearCalendarDog = () => {
    this.setState({calendarDog: testDog})
  }

  render() {

    return (
      <div className="account-bg">
        <div className="account-header">
          <h1>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
        </div>
        <div className="picture-div">
          <p>The picture should go here</p>
        </div>
        <div>
          <UserCalendar setCalendarDog={this.setCalendarDog}/>
          <DeletionModal clearCalendarDog={this.clearCalendarDog} calendarDog={this.state.calendarDog}/>
        </div>
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
