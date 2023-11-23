import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import students from "../../Assets/students.png"
import pupil from "../../Assets/pupil.png"
import water from "../../Assets/water.png"
import plant from "../../Assets/plants.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Servicespage.scss'

function Servicespage() {
  return (
    <Container fluid className="text-box purs">

    <div className='Servicespage'>
            <h2 id='program'>Our Programs</h2>
            <div className='line'></div>
            <CardGroup className='card-group'>
            <Card >
            <Card.Img variant="top" src={students} className='stude' />
            </Card>
            <Card >
            <Card.Body>
                <Card.Title><h4>Education</h4></Card.Title>
                <Card.Text>
                Mbua Nene promotes and cultivates youth empowerment through educational programs, 
                entrepreneurship, and training. Our flagship project is the Mbua Nene Scholarship,
                which currently has 38 students in primary, secondary, and tertiary institutions. 
                We plan to expand this program to 600 in the next two years supported by creating
                a special monthly bursary fund. 
                </Card.Text>
            </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={pupil} className='stude' />
            
            </Card>
        </CardGroup>
        <CardGroup>
        <Card >
            <Card.Body>
            <Card.Title><h4>Water</h4></Card.Title>
            <Card.Text>
            Currently we are working with development institutions to 
            expand water pipelines and increase storage at homes through
             buying water tanks for needy families.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={water} className='stude'/>
        </Card>
        <Card >
            <Card.Body>
            <Card.Title><h4>Sanitation</h4></Card.Title>
            <Card.Text>
            We have worked with different partners to ensure access to water for
             drinking, washing hands before meals and after bathroom use in households, 
             public facilities and homes. 
            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
        <CardGroup>
        <Card>
        <Card.Body>
            <Card.Title><h4>Climate Change</h4></Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
            </Card.Text>
        </Card.Body>
        </Card>
        <Card>
        <Card.Img variant="top" src={plant} className='stude' />
        </Card>
        <Card >
        <Card.Body>
            <Card.Title><h4>Environmental Conservation</h4></Card.Title>
            <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
            </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>

        <h3 >Our Pillars</h3>

        <Row className='pillars' fluid>
            <Col className='pillar' lg={4} md={6} sm={12}>
                <h4>Lets focus on the future</h4>
                <p>We know that change is here with us and someone has to champion it.
                We are the champions of change. We believe in a future that is bright,
                a future that is just and sustainable. We work towards that by investing
                into our community.</p>
            </Col>
            <Col className='pillar' lg={4} md={6} sm={12}>
                <h4>Bigger Picture</h4>
                <p>We believe in building a better tomorrow. We have the benefit of taking the long view.
                The capacity to work lightly and collaboratively toward systemic change.
                </p>
            </Col>
            <Col className='pillar' lg={4} md={6} sm={12}>
                <h4>A stronger community</h4>
                <p>Our programs focus on strong communities.
                We invest and support all facets of the community and ensure equality and equity.</p>
            </Col>
        </Row>

      
     </div>
     </Container>

  )
}

export default Servicespage





    