import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { connect } from 'react-redux'


// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
// BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment)) // or globalizeLocalizer
BigCalendar.momentLocalizer(moment)


export class UserCalendar extends Component {

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }


  render() {
    console.log(this.props, "Hello from usersCalendar")

    let myEventsList = []
    if (this.props.currentUser.appointments) {
      myEventsList = this.props.currentUser.appointments.map(app => {
        let dayArr = app.day.split("-")
        return {title: app.name, start: new Date(dayArr[0], parseInt(dayArr[1]) - 1, dayArr[2]), end: new Date(dayArr[0], parseInt(dayArr[1]) - 1, parseInt(dayArr[2])), appointment: app}
      })
    }

    return (
      <div className="big-calendar-container">
        <BigCalendar
        selectable
        {...this.props}
        events={myEventsList}
        timeslots={6}
        step={15}
        className='big-calendar'
        onSelectEvent={this.props.setCalendarDog}
        views={['month']}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {currentUser: state.users.currentUser}
}

export default connect(mapStateToProps, null)(UserCalendar)
