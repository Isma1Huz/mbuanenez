import React from 'react'
import './Contactspage.scss'
import { MdLocationPin } from 'react-icons/md'
import { MdCall } from 'react-icons/md'
import { FaEnvelope } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'

function Contactspage() {
  return (
    <div className='Contactspage'>                            
            <div className="top">
                <h3>Contact Us</h3>
                <div className='line'></div>
            </div>
            <Row className='icons'>
                <Col lg={3} md={4} sm={8}>
                    <MdLocationPin className='contact-icon'/>
                    <h4>Address</h4>
                    <p>first to show that equal height action</p>
                </Col>
                <Col lg={3} md={4} sm={8}>
                    <FaEnvelope className='contact-icon'/>
                    <h4>Email</h4>
                    <p>first to show that equal height action</p>
                </Col>

                <Col lg={3} md={4} sm={8}>
                    <MdCall className='contact-icon'/>
                    <h4>Phone</h4>
                    <p>first to show that equal height action</p>
                </Col>
            </Row>
            <Row className='touch'>
                <Col lg={3} md={4} sm={8}>
                    <h4>Get in touch</h4>
                    <p>This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </p>
                </Col>
                <Col lg={3} md={4} sm={8}>
                    <div className="map">  
                        map
                    </div>
                </Col>


            </Row>
    </div>
  )
}

export default Contactspage
