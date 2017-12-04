import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

export default class MyCalendar extends Component {

  render() {

    let myEventsList = []

    return (
      <div>
        <BigCalendar
        events={myEventsList}
        startAccessor='startDate'
        endAccessor='endDate'
        views={['month']}
        className='big-calendar'
        />
      </div>
    )
  }
}
