import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socials-container">
        <h3>Hjul House</h3>
        <div className="socials">
          <FontAwesomeIcon icon={faSquareInstagram} className="fa-icon fa-2x" />
          <FontAwesomeIcon icon={faTwitter} className="fa-icon fa-2x" />
          <FontAwesomeIcon icon={faSquareFacebook} className="fa-icon fa-2x" />
        </div>
      </div>
      <p>&copy; Hjul House 2023</p>
    </div>
  );
}

export default Footer;
