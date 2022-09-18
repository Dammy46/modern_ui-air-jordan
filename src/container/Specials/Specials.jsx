import React from 'react'
import { MenuItem, SubHeading } from '../../component';
import './Specials.css'
import data from '../../constants/data'
import images from '../../constants/images';

const Specials = () => {
  return (
    <div
      className="app__specialShoe flex__center section__padding"
      id="specials"
    >
      <div className="app__specialShoe-title">
        <SubHeading title="Build your own path with every step." />
        <h1 className="head-text">Best Shoes</h1>
      </div>

      <div className="app__specialShoe-menu">
        <div className="app__specialShoe-menu_wine  flex__center">
          <p className="app__specialShoe-menu_heading">Air Jordan</p>
          <div className="app__specialShoe_menu_items">
            {data.airJordan.map((shoe, index) => (
              <MenuItem
                key={shoe.title + index}
                title={shoe.title}
                price={shoe.price}
                category={shoe.category}
              />
            ))}
          </div>
        </div>

        <div className="app__specialShoe-menu_img">
          <img src={images.lace} alt="menu__img" />
        </div>

        <div className="app__specialShoe-menu_cocktails  flex__center">
          <p className="app__specialShoe-menu_heading">Subsidiary</p>
          <div className="app__specialShoe_menu_items">
            {data.subsidiary.map((shoe, index) => (
              <MenuItem
                key={shoe.title + index}
                title={shoe.title}
                price={shoe.price}
                category={shoe.category}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 15 }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  );
}

export default Specials