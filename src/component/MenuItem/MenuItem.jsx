import React from 'react'
import './MenuItem.css'
const MenuItem = ({title, price, category}) => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p-text">{title}</p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p-text">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p-text" style={{ color: '#AAAAAA' }}>
          <em>{category}</em>
        </p>
      </div>
    </div>
  );
}

export default MenuItem