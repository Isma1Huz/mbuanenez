import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import logo from "../../Assets/logos.png";
import { FaFacebookF, FaEnvelope, FaTwitter } from "react-icons/fa";
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <Container className='footer' expand='lg' fluid>
      <div className='footerlogo'>
        <img
          src={logo}
          width="100"
          height="30"
          className="logo"
          alt="React Bootstrap logo"
        />
        <b>Mbuanene</b>
      </div>
      <div className="fts">
        <ul className='ftul'>
          <li><Link className='x' style={{ color: 'black' }} to='/'>Who we are</Link></li>
          <li><Link className='x' style={{ color: 'black' }} to='/'>Achievements</Link></li>
          <li><Link className='x' style={{ color: 'black' }} to='/'>Our vision</Link></li>
        </ul>
        <ul className='ftul'>
          <li><Link className='x' style={{ color: 'black' }} to='/Aboutpage'>Our History</Link></li>
          <li><Link className='x' style={{ color: 'black' }} to='/Aboutpage'>Our Purpose</Link></li>
          <li><Link className='x' style={{ color: 'black' }} to='/Aboutpage'>Our Team</Link></li>
        </ul>
        <ul className='ftul'>
          <li><Link className='x' style={{ color: 'black' }} to='/Servicespage'>Our Programs</Link></li>
          <li><Link className='x' style={{ color: 'black' }} to='/Servicespage'>Our Pillars</Link></li>
          <li><Link className='x' style={{ color: 'black' }} to='/Contactspage'>Contacts</Link></li>
        </ul>
        <ul className='sosh'>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF className='soshicon' /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className='soshicon' /></a></li>
          <li><a href="mailto:your-email@example.com"><FaEnvelope className='soshicon' /></a></li>
        </ul>
      </div>
      <p className='copyright'>&copy; 2023 Mbuanene. All rights reserved.</p>
    </Container>
  );
}

export default Footer;
