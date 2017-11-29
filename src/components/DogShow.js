import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedDog } from '../actions/dogs'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'
import { Button, Header, Image, Modal } from 'semantic-ui-react'


let mappedDisabledDates = []

var today = new Date();

export class DogShow extends Component {


  state = {
    date: new Date()
  }

  componentDidMount(){
    this.props.setSelectedDog(this.props.match.params.dogId)
  }



  // Function to set state of DogShow component when new date on calendar is onMapClicked

  handleDateSelect = (date) => (this.setState({ date }))


  // Posts appointment to db

  handleSubmit = (event) => {
    console.log(this.props.selectedDog)
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/appointments', {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        dog_id: parseInt(this.props.selectedDog.id),
        user_id: 1,
        day: this.state.date
      })
    })
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

          <Modal trigger={<Button>Submit Reservation</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>
              <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
              <Modal.Description>
                <Header>Default Profile Image</Header>
                <p>We've found the following gravatar image associated with your e-mail address.</p>
                <p>Is it okay to use this photo?</p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {selectedDog: state.dogs.selectedDog, disabledDates: state.dogs.disabledDates}
}

function mapDispatchToProps(dispatch){
  return {setSelectedDog: (dog) => dispatch(setSelectedDog(dog))}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogShow)
