// src/Image.jsx
import React from 'react';
import './Image.css';

const Image = ({ imageUrl }) => {
  return <img src={imageUrl} alt="Character" />;
};

export default Image;
