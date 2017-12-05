import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedDog } from '../actions/dogs'
import { addAppointment, setDemoUser } from '../actions/users'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'
import SubmissionModal from './SubmissionModal'


let mappedDisabledDates = []

var today = new Date();

export class DogShow extends Component {


  state = {
    date: new Date()
  }

  componentDidMount(){
    this.props.setSelectedDog(this.props.match.params.dogId)
    this.props.setDemoUser()
  }



  // Function to set state of DogShow component when new date on calendar is onMapClicked

  handleDateSelect = (date) => (this.setState({ date }))


  // Posts appointment to db

  handleAppointmentSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.date.toISOString())
    fetch('http://localhost:3000/api/v1/appointments', {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        dog_id: parseInt(this.props.selectedDog.id),
        user_id: 1,
        day: this.state.date.toISOString(),
        name: this.props.selectedDog.name,
        photo: this.props.selectedDog.photo
      })
    })
    .then(res => res.json())
    .then(json => {
      this.props.addAppointment(json)
      this.props.history.push("/account")
    })
    // Is there a better way to do this? ^^
  }



  render() {

    // Takes the appointment days already saved in the db for the selected dog and saves them to an array. If statement checks to see if fetch was returned yet. If not, does not reassign variable

    if(this.props.selectedDog !== null) {
      let mappedDisabledDates = this.props.selectedDog.appointments.map(appointment => {
          let dayArr = appointment.day.split("-")
          return new Date(parseInt(dayArr[0]), parseInt(dayArr[1]), parseInt(dayArr[2]))
        })
    }


    return(
      <div>
        {this.props.selectedDog === null ? <p></p>
        :
        <div>
          <h1>{this.props.selectedDog.name}</h1>
          <InfiniteCalendar onSelect={this.handleDateSelect} disabledDates={this.props.disabledDates} width={300} height={450} selected={today} minDate={today}/>
          <SubmissionModal selectedDog={this.props.selectedDog} date={this.state.date} handleAppointmentSubmit={this.handleAppointmentSubmit} />
        </div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {selectedDog: state.dogs.selectedDog, disabledDates: state.dogs.disabledDates}
}

function mapDispatchToProps(dispatch){
  return {setDemoUser: () => dispatch(setDemoUser()), setSelectedDog: (dog) => dispatch(setSelectedDog(dog)), addAppointment: (appointment) => dispatch(addAppointment(appointment))}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogShow)
