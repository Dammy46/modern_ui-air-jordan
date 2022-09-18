import React from 'react';
import { SubHeading } from '../../component';
import images from '../../constants/images';
import './Chairman.css';

const Chairman = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.founder} alt="img" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title="Chairman's word" />
        <h1 className="head-text">What we believe in</h1>

        <div className="app__chairman-content">
          <blockquote className="p-text">
            <em>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              distinctio provident quas. Voluptatem ab modi ipsam fugit amet
              fuga ducimus, vitae quam debitis rerum eligendi dolorum error!
              Natus, velit sequi.
            </em>
          </blockquote>
        </div>

        <div className="app__chairman-sign">
          <p>Larry Miller</p>
          <p className="p-text">Chairman </p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  );
};

export default Chairman;
