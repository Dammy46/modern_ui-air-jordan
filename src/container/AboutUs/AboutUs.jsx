import React from 'react';
import { FaShoePrints } from 'react-icons/fa';
import './AboutUs.css';
import images from '../../constants/images';
const AboutUs = () => {
  return (
    <div className="app__aboutus flex__center section__padding" id="about">
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="head-text">About Us</h1>
          <FaShoePrints color="#97dbfd" />
          <p className="p-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content_j flex__center">
          <img src={images.J} alt="logo" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="head-text">Our History</h1>
          <FaShoePrints color="#97dbfd" />
          <p className="p-text">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
