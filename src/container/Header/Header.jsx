import React from 'react'

import './Header.css'
import images from '../../constants/images'
import { SubHeading } from '../../component'

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Five Stars Shoes" />
        <h1 className="head-text">The Key to Good Athletics</h1>
        <p className="p-text" style={{ margin: '2rem 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{' '}
        </p>
        <button className="custom__button">Explore Store</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome" />
      </div>
    </div>
  );
}

export default Header