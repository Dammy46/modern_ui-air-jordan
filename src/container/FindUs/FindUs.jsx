import React from 'react';
import { SubHeading } from '../../component';
import images from '../../constants/images';

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="head-text" style={{ marginBottom: '3rem' }}>
          Find Us
        </h1>
        <div className="app__wrapper-content">
          <p className="p-text">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p className="p-text" style={{ color: '#97dbfd', margin: '2rem 0' }}>
            Opening Hours
          </p>
          <p className="p-text">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p-text">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: '2rem' }}
        >
          Visit Us
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.footer} alt="finus_img" />
      </div>
    </div>
  );
};

export default FindUs;
