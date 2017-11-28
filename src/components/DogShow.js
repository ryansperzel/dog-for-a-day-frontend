import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedDog } from '../actions/dogs'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'

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
          <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>

          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">

              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Modal Header</h4>
                </div>
                <div className="modal-body">
                  <img src="https://dhn-hes.ca.uky.edu/files/styles/panopoly_image_original/public/gloucestershire_old_spots_hog.jpg?itok=k5m0SGsc" height="400" width="400"/>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Reserve</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                </div>
              </div>

            </div>
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
  return {setSelectedDog: (dog) => dispatch(setSelectedDog(dog))}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogShow)
