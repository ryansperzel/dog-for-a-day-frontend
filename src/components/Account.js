import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setDemoUser } from '../actions/users'
import UserCalendar from './UserCalendar'
import DeletionModal from './DeletionModal'
import NavBar from './NavBar'
import { Image } from 'semantic-ui-react'

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

  // Used to calculate total donated to shelters

  getSum = (total, num) => {
    return total + num;
  }

  render() {

    let totalDonatedArr = this.props.currentUser.appointments.map(app => app.cost)
    let totalDonated = totalDonatedArr.reduce(this.getSum, 0)

    return (
      <div>
        <NavBar/>
        <div className="account-bg">
          <div className="picture-div">
            <div className='account-name-header'>
              <Image src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/13256307_10154344481684155_5751642338644463684_n.jpg?oh=c8134afea7acee2b40f1d33e2e92302f&oe=5AC7F3F4' size='medium' circular />
              <br/>
              <br/>
              <h2>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
              <h5>You've donated ${totalDonated} to dog shelters</h5>
            </div>
            <UserCalendar setCalendarDog={this.setCalendarDog}/>
            <DeletionModal clearCalendarDog={this.clearCalendarDog} calendarDog={this.state.calendarDog}/>
          </div>
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
