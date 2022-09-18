import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { FaShoePrints } from 'react-icons/fa';
import images from '../../constants/images';
import { Newsletter } from '../../component';
import './Footer.css';

const Footer = () => {
  return (
    <div className="app__footer section__padding" id="login">
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p-text">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p-text">+1 212-344-1230</p>
          <p className="p-text">+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.jordan} alt="footer_logo" />
          <p className="p-text">
            &quot;“Never say never, because limits, like fears, are often just
            an illusion.&quot;
          </p>
          <FaShoePrints color="#97dbfd" />

          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p-text">Monday-Friday:</p>
          <p className="p-text">08:00 am - 12:00 am</p>
          <p className="p-text">Saturday-Sunday:</p>
          <p className="p-text">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p-text">2022 Jordan. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
