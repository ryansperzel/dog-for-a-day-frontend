import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteAppointment } from '../actions/users'


export class DeletionModal extends Component {

  state = {
    modalOpen: false
  }


  handleModalOpen = () => this.setState({ modalOpen: true })

  handleModalClose = () => {
    this.props.clearCalendarDog()
    this.setState({ modalOpen: false })
  }

  handleDelete = () => {
    fetch(`http://localhost:3000/api/v1/appointments/${this.props.calendarDog.id}`, {
      method: 'DELETE'
    }).then(this.props.deleteAppointment(this.props.calendarDog.id))
    .then(this.setState({modalOpen: false}))
  }

  render() {

    return(
      <Modal onClose={this.handleModalClose} open={this.state.modalOpen}>
        <Modal.Header>Reservation Details</Modal.Header>
        <Modal.Content image>
          <Image wrapped circular size='medium' src={this.props.calendarDog.photo}/>
          <Modal.Description className="modal-description">
            <Header>{this.props.calendarDog.name}</Header>
            <p> You have reserved {this.props.calendarDog.name} on {this.props.calendarDog.day}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='grey' onClick={this.handleModalClose}>
            <Icon name='arrow left' /> Go Back
          </Button>
          <Button color='red' onClick={this.handleDelete} inverted>
            <Icon name='remove' /> Delete Reservation
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {deleteAppointment: (id) => dispatch(deleteAppointment(id))}
}

export default connect(null, mapDispatchToProps)(DeletionModal)
