import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedDog } from '../actions/dogs'
import { addAppointment, setDemoUser } from '../actions/users'
import { Image, Icon } from 'semantic-ui-react'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'
import SubmissionModal from './SubmissionModal'
import NavBar from './NavBar'

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
    let cost = 0
    if (this.props.selectedDog.size === "S") {
      cost = 10
    } else if (this.props.selectedDog.size === "M") {
      cost = 15
    } else {
      cost = 20
    }
    console.log(this.props.selectedDog.size)
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
        photo: this.props.selectedDog.photo,
        cost: cost
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
    console.log(this.props.selectedDog)

    // Takes the appointment days already saved in the db for the selected dog and saves them to an array. If statement checks to see if fetch was returned yet. If not, does not reassign variable

    if(this.props.selectedDog !== null) {
      let mappedDisabledDates = this.props.selectedDog.appointments.map(appointment => {
          let dayArr = appointment.day.split("-")
          return new Date(parseInt(dayArr[0]), parseInt(dayArr[1]), parseInt(dayArr[2]))
        })
    }


    return(
      <div>
        <NavBar/>
        {this.props.selectedDog === null ? <p></p>
        :
        <div className="dog-show-container-div">
          <div className="pic-name-div">
            <Image className="dog-show-img" src={this.props.selectedDog.photo} size='medium' circular />
            <h2><b>{this.props.selectedDog.name}</b></h2>
            <p>Sex: {this.props.selectedDog.sex}     |     Size: {this.props.selectedDog.size}     |     Age: {this.props.selectedDog.age}</p>
            <p>Description: {this.props.selectedDog.description}</p>


          </div>
          <div className="infinite-calendar-div">
            <InfiniteCalendar onSelect={this.handleDateSelect} disabledDates={this.props.disabledDates} width={300} height={450} selected={today} minDate={today}/>
            <br/>
            <br/>
            <SubmissionModal selectedDog={this.props.selectedDog} date={this.state.date} handleAppointmentSubmit={this.handleAppointmentSubmit} />
          </div>
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
