import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class DeletionModal extends Component {

  state = {
    modalOpen: false
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
    if (this.props.calendarDog !== nextProps.calendarDog) {
      this.setState({modalOpen: true})
    }
  }

  handleModalOpen = () => this.setState({ modalOpen: true })

  handleModalClose = () => this.setState({ modalOpen: false })

  testDeletion = () => {
    console.log("I'm deleting")
  }

  render() {

    return(
      <Modal onClose={this.handleModalClose} open={this.state.modalOpen}>
        <Modal.Header>Confirm Reservation Details</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='https://i.imgur.com/8qbBGTv.png' />
          <Modal.Description className="modal-description">
            <Header>Reservation Maker</Header>
            <p>Reserving name</p>
            <p>for date</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='grey' onClick={this.handleModalClose}>
            <Icon name='arrow left' /> Go Back
          </Button>
          <Button color='red' onClick={this.testDeletion} inverted>
            <Icon name='remove' /> Delete Reservation
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
