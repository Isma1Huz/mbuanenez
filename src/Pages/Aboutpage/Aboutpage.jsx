import React from 'react';
import Cards from '../../Components/Card/Card';
import hands from "../../Assets/hands.png";
import purpose from "../../Assets/hp.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Aboutpage.scss';

function Aboutpage() {
  return (
    <Container fluid className="Aboutpage">
      <Row className="banner">
          <h1>About Us</h1>
      </Row>
      <h3>Our History</h3>
      <Row>
            <Col className='column'>
              <p >Mbua Nene Initiative (MBUA NENE) is currently supporting 
              development initiatives in Kitui County in providing sustainable 
              livelihood through a free entrepreneurship training program for small 
              holder farmers in Kitui County based on livestock (indigenous cattle, 
              goats and chicken). The programs also support education, water, and
              health care systems. The initiative has been in operations since 2015.</p>
            </Col>
            <Col className='column'>
              <img
                src={hands}
                width="550"
                height="300"
                className="hands"
                alt="R"
              />
            </Col>
      </Row>
      <h3>Our Purpose</h3>

      <Row>
            <Col >
              <img
                src={purpose}
                width="550"
                height="330"
                className="purpose_img "
                alt="R"
              />
            </Col>
            <Col className='column left '>
              <p >We help drive local solutions for national change on the 
              issues that matter most to Kenyans in Kitui County. We work 
              with partners to create a just, sustainable future.

              Our programming targets pressing social issues in Kenya,
              including youth engagement, gender equality, support for 
              entrepreneurship and social innovation, and community access
              to water, education, and affordable health care. Our flagship project
              is Mbua Nene Scholarship that currently has 38 students in primary, 
              secondary and tertiary institutions. We plan to expand this program
              to 600 in the next two years supported by creating a unique monthly 
              bursary fund.</p>
            </Col>
      </Row>
      <h3>Our Team</h3>

      <Row className="team">
          <Cards />
      </Row>
    </Container>
  );
}

export default Aboutpage;
