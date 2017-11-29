import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class SubmissionModal extends Component {

  state = {
    modalOpen: false
  }

  handleModalOpen = () => this.setState({ modalOpen: true })

  handleModalClose = () => this.setState({ modalOpen: false })

  render() {
    return(
      <Modal trigger={<Button onClick={this.handleModalOpen}>Submit Reservation</Button>} onClose={this.handleModalClose} open={this.state.modalOpen}>
        <Modal.Header>Confirm Reservation Details</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='../images/foodbowl.png' />
          <Modal.Description>
            <Header>Reservation Maker</Header>
            <p>Reserving {this.props.selectedDog.name}</p>
            <p>For date {this.props.date.toString()}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleModalClose} inverted>
            <Icon name='remove' /> Go Back
          </Button>
            <Button color='green' onClick={this.props.handleAppointmentSubmit} inverted>
              <Icon name='checkmark' /> Agree
            </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
