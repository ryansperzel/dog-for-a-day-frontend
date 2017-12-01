import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../actions/users'


export class Account extends Component {

  componentWillMount(){
    this.props.setUser()
  }

  render() {

    
    return (
      <div>
        <h1>Hello, {this.props.currentUser.first_name}</h1>
        <h3>Your Past Puppy Pals</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {currentUser: state.users.currentUser}
}

function mapDispatchToProps(dispatch){
  return {setUser: () => dispatch(setUser())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
