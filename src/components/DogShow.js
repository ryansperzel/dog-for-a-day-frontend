import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setSelectedDog } from '../actions/dogs'
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'

var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);


export class DogShow extends Component {


  state = {
    date: new Date()
  }

  componentDidMount(){
    console.log(this.props)
    this.props.setSelectedDog(this.props.match.params.dogId)
  }


  // Function to set state of DogShow component when new date on calendar is onMapClicked

  handleDateSelect = (date) => (this.setState({ date }))

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.date)
  }



  render() {
    return(
      <div>
        {this.props.selectedDog === null ? <p></p>
        :
        <div>
          <h1>{this.props.selectedDog.name}</h1>
          <form onSubmit={this.handleSubmit}>
            <InfiniteCalendar onSelect={this.handleDateSelect} width={300} height={450} selected={today} disabledDays={[0,6]} minDate={lastWeek}/>
            <input type="submit" />
          </form>
        </div>}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {selectedDog: state.dogs.selectedDog}
}

function mapDispatchToProps(dispatch){
  return {setSelectedDog: (dog) => dispatch(setSelectedDog(dog))}
}

export default connect(mapStateToProps, mapDispatchToProps)(DogShow)
