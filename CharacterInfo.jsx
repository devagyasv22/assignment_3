// CharacterInfo.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import Image from './Image'; // Import the Image component
import Stats from './Stats'; // Import the Stats component

const CharacterInfo = () => {
  const [characterData, setCharacterData] = useState(null); // State to hold character data
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Effect hook to fetch character data from an API
    axios.get('https://api.example.com/character')
      .then(response => {
        setCharacterData(response.data); // Update characterData state with fetched data
        setLoading(false); // Set loading state to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
        setLoading(false); // Set loading state to false in case of error
      });
  }, []); // Empty dependency array means this effect runs once after initial render

  if (loading) {
    return <p>Loading...</p>; // Display a loading message while data is being fetched
  }

  return (
    <div className="character-info">
      <h2>{characterData.name}</h2> {/* Display character's name */}
      <p>{characterData.description}</p> {/* Display character's description */}
      <Image imageUrl={characterData.image_url} /> {/* Pass image_url to Image component */}
      <Stats stats={characterData.stats} /> {/* Pass stats to Stats component */}
    </div>
  );
};

export default CharacterInfo;
