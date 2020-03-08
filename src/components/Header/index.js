import React from 'react'
import { Container, Navbar } from 'rbx'

import '../../styles/Header.scss'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="" />
          <Navbar.Burger
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>

        <Navbar.Menu id="navbar-menu">
          <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
            Item 1
        </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  )
}

export default Header