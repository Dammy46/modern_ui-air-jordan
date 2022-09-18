import React, { useState } from 'react';
import { GiHamburgerMenu, GiRunningShoe } from 'react-icons/gi';
import './Navbar.css';
import images from '../../constants/images';
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.jordan} alt="" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'specials', 'collabs', 'contact'].map((item, i) => (
          <li className="p-text" key={`link ${i}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p-text">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p-text">
          Store
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          className="app__navbar-open"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex-center slide__down">
            <GiRunningShoe
              className="app__navbar-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul
              className="app__navbar-smallscreen_links"
              style={{ listStyle: 'none' }}
            >
              {['home', 'about', 'specials', 'collabs', 'contact'].map(
                (item, i) => (
                  <li
                    className="p-text"
                    key={`link ${i}`}
                    onClick={() => setToggleMenu(false)}
                  >
                    <a href={`#${item}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
