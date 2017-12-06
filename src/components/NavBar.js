import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Logo from '../images/dogicon4.png'


export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable fixed="top">
        <Menu.Item>
          <img src={Logo} />
        </Menu.Item>

        <Menu.Item
          as={Link}
          to='/'
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='my reservations'
          as={Link}
          to='/account'
          active={activeItem === 'my reservations'}
          onClick={this.handleItemClick}
        >
          My Reservations
        </Menu.Item>

        <Menu.Item
          name='Login'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
          position='right'
        >
          Login
        </Menu.Item>
      </Menu>
    )
  }
}
