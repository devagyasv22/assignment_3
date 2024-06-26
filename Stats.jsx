// src/Stats.jsx
import React from 'react';
import './Stats.css';

const Stats = ({ stats }) => {
  return (
    <ul>
      {Object.keys(stats).map((key) => (
        <li key={key}>
          {key}: {stats[key]}
        </li>
      ))}
    </ul>
  );
};

export default Stats;
