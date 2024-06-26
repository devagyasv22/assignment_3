import React, { useState } from 'react';
import axios from 'axios';
import Image from './Image';
import Stats from './Stats';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [characterData, setCharacterData] = useState(null);

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const token = '16fc575a2fd01ea1c134cb8f1a2765be';
    const url = `https://cors-proxy-superhero-api.onrender.com/${token}/getByName/${name}`;

    axios.get(url)
      .then(response => {
        console.log(response.data);
        setCharacterData(response.data);
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
      });
  };

  return (
    <div className="app">
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter character name"
        />
        <button type="submit">Search</button>
      </form>

      {characterData && (
        <div className="character-info">
          <h2>{characterData.name}</h2>
          <p>{characterData.description}</p>
          <Image imageUrl={characterData.image_url} />
          <Stats stats={characterData.stats} />
        </div>
      )}
    </div>
  );
};

export default App;
