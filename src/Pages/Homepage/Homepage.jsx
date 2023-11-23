import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeWriterEffect from 'react-typewriter-effect';
import homeimg from "../../Assets/12-01.png";
import aboutsimage from "../../Assets/abouts.png";
import achievement from "../../Assets/achievement.png";
import './Homepage.css';
function Homepage() {
  return (
    <Container fluid id="Home">
      <Row className="home-section bg-success">
        <Col>
          <div className="home-text">
            <TypeWriterEffect
              textStyle={{
                fontFamily: 'Red Hat Display',
                color: '#3F3D56',
                fontWeight: 500,
                fontSize: '1.5em',
              }}
              startDelay={1000}
              cursorColor="#3F3D56"
              text="Mbua Nene Initiative"
              loop={true}
              typeSpeed={30}
            />
            <p className="upmargin">A non-governmental non-profit community organization based in Kitui.</p>
            <a href="#about-section" style={{ textDecoration: 'none', color: 'white' }} >
              <Button variant="outline-dark" className="btn">About</Button>{' '}
            </a>
          </div>
        </Col>
        {/* <Col className="column home-img"> */}
            <img src={homeimg} alt="Home of a child" id="homeimg" />
        {/* </Col> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="homewave">
          <path fill="#fff" fillOpacity="1" d="M0,96L40,90.7C80,85,160,75,240,90.7C320,107,400,149,480,186.7C560,224,640,256,720,261.3C800,267,880,245,960,229.3C1040,213,1120,203,1200,213.3C1280,224,1360,256,1400,272L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
        </svg>
      </Row>
      <Row id="about-section">
        <Col id='whoweare' className="column">
          <h4>Who we are</h4>
          <p>Mbua Nene Initiative (MBUA NENE) is currently supporting development initiatives in Kitui County in providing sustainable livelihood through a free entrepreneurship training program for small holder farmers in Kitui County based on livestock (indigenous cattle, goats, and chicken). The programs also support education, water, and health care systems.
            <br /><br />
            <span>The main programs of the organization include:</span>
            <br /><br />
            <ul className="list">
              <li>Education</li>
              <li>Water and Sanitation</li>
              <li>Climate Change and Environmental Conservation</li>
            </ul>
          </p>
        </Col>
        <Col className="column">
          <img
            src={aboutsimage}
            width="370"
            height="450"
            className="about_img"
            alt="us"
          />
        </Col>
      </Row>
      <Row className="achievement" >
        <Col className="column">
          <img src={achievement} className="achieve_img" alt="achieve" />
        </Col>
        <Col className="column achieve-text">
          <h4>Achievement and Target</h4>
          <p>Our programming targets pressing social issues in Kenya, including youth engagement, gender equality, support for entrepreneurship and social innovation, and community access to water, education, and affordable health care. Our flagship project is Mbua Nene Scholarship that currently has 38 students in primary, secondary, and tertiary institutions. We plan to expand this program to 600 in the next two years supported by creating a unique monthly bursary fund.
            <br />
            <p><big><b>38+ </b></big> Students supported through scholarships</p>
            <span> <b>TARGET</b><big><b>   600+</b></big>   students in a span of 2 years</span>
          </p>
        </Col>
      </Row>
     </Container>
  );
}

export default Homepage;
