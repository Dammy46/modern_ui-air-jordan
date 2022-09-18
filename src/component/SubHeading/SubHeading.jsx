import React from 'react';
import { FaShoePrints } from 'react-icons/fa';
const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className="p-text">{title}</p>
      <FaShoePrints color="#97dbfd" />
    </div>
  );
};

export default SubHeading;
