import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../Assets/logos.png"
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navigation() {
  return (
    <Navbar bg="lightwhoweare" expand="lg" fixed='top' className='navigation' id='Navigation' fluid>
      <Container className='navitem1'>
            <Navbar.Brand href="#home" className='logodiv'>
              <img
                src={logo}
                width="100"
                height="30"
                className="logo"
                alt="React Bootstrap logo"
              />
              <b>Mbuanene</b>
            </Navbar.Brand>
      </Container>
      <Container  className='navitem2'>
        <Navbar.Toggle aria-controls="navbarScroll" id='navbartogler' />
        <Navbar.Collapse id="navbarScroll" className='collapse'>
          <Nav
            className="me-auto my-2 my-lg-0 uls"
            style={{ maxHeight: '100px' }}
          >
          <Link   className='x'  to='/'>Home</Link>
          <Link   className='x'  to='/Aboutpage'>About Us</Link>
          <Link   className='x'  to='/Servicespage'>Programs</Link>
          <Link   className='x'  to='/Contactspage'>Contact Us</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      )
}

export default Navigation
