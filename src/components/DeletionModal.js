import React, { Component } from 'react'
import { Button, Header, Image, Modal, Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteAppointment } from '../actions/users'


export class DeletionModal extends Component {

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
    let fixedDate = ["Test", "date", "for", "null", "value"]
    if (this.props.calendarDog.name !== "Tester") {
      fixedDate = new Date(this.props.calendarDog.day)
      fixedDate = fixedDate.toString().split(" ")
    }

    return(
      <Modal onClose={this.handleModalClose} open={this.state.modalOpen} size='small'>
        <Modal.Header>Reservation Details</Modal.Header>
        <Modal.Content image>
          <Image wrapped circular size='medium' src={this.props.calendarDog.photo}/>
          <Modal.Description className="modal-description">
            <Header>{this.props.calendarDog.name}</Header>
            <p> You have reserved {this.props.calendarDog.name} on {fixedDate[0] + ', ' + fixedDate[1] + " " + fixedDate[2] + " " + fixedDate[3]}</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
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
