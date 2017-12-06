import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class SubmissionModal extends Component {

  state = {
    modalOpen: false
  }

  handleModalOpen = () => this.setState({ modalOpen: true })

  handleModalClose = () => this.setState({ modalOpen: false })

  render() {

    let fixedDate = this.props.date.toString().split(" ")

    let cost = 0
    if (this.props.selectedDog.size === "S") {
      cost = 10
    } else if (this.props.selectedDog.size === "M") {
      cost = 15
    } else {
      cost = 20
    }

    return(
      <Modal size='small' trigger={<Button color='blue' className="modal-button" onClick={this.handleModalOpen}>Submit Reservation</Button>} onClose={this.handleModalClose} open={this.state.modalOpen}>
        <Modal.Header>Confirm Reservation Details</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://i.imgur.com/8qbBGTv.png' />
          <Modal.Description className="modal-description">
            <Header>Reserving {this.props.selectedDog.name}</Header>
            <p>for {fixedDate[0] + ', ' + fixedDate[1] + " " + fixedDate[2] + " " + fixedDate[3]}</p>
            <p>{this.props.selectedDog.name}'s <Popup trigger={<a><b>doggie bag</b></a>} content="A doggie bag includes enough food and water for the day (with pet bowls), toys, and specific info about what your reserved dog likes!" on='hover'/> will cost <Popup trigger={<a><b>${cost}</b></a>}
              content={<div><p>There are 3 tiers of doggie bag costs depending on the size of the dog:</p><ul className='tier-list'><li>Small: $10</li><li>Medium: $15</li><li>Large: $20</li></ul></div>} on='hover'/> and will go straight to the shelter's operating funds
            </p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleModalClose} inverted>
            <Icon name='remove' /> Go Back
          </Button>
            <Button color='green' onClick={this.props.handleAppointmentSubmit} inverted>
              <Icon name='checkmark' /> Reserve
            </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
