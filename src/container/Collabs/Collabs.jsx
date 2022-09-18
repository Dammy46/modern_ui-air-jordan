import React from 'react'
import {SubHeading} from '../../component'
import './Collabs.css'
import data from '../../constants/data'
import images from '../../constants/images';

const AwardCard = ({ collabs: { img, title, subtitle } }) => (
  <div className="app__collabs-card">
    <img src={img} alt="awards" />
    <div className="app__collabs-card_content">
      <p className="p-text" style={{ color: '#97dbfd' }}>
        {title}
      </p>
      <p className="p-text">{subtitle}</p>
    </div>
  </div>
);

const Collabs = () => {
  return (
    <div className="app__wrapper section__padding" id="collabs">
      <div className="app__wrapper_info">
        <SubHeading title="Collaborations" />
        <h1 className="head-text">
          Our <em>Collabs</em>
        </h1>

        <div className="app__collabs">
          {data.collabs.map((data) => (
            <AwardCard collabs={data} key={data.title} />
          ))}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.imgJ} alt="laurels_img" />
      </div>
    </div>
  );
}

export default Collabs