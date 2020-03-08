import React from 'react'
import { Container, Navbar, Column } from 'rbx'
import { Link } from 'react-router-dom'
import '../../styles/Header.scss'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
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
            <Column.Group>
              <Column>
                <Link to="/register" className="button is-white has-text-custom-purple">Register</Link>
              </Column>
              <Column>
                <Link to="/login" className="button is-outlined is-custom-purple">Login</Link>
              </Column>
            </Column.Group>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  )
}

export default Header