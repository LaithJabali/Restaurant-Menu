import React, { useState } from 'react';
const englishLocations = ["Al Tireh", "Al Masyoun", "Al Irsal", "Nablus"];

const LocationDropdown = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div>
      <label htmlFor="location-select">Choose a location:</label>
      <select id="location-select" value={selectedLocation} onChange={handleChange}>
        <option value="">--Please choose an option--</option>
        {englishLocations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
      {selectedLocation && <p>You selected: {selectedLocation}</p>}
    </div>
  );
};

export default LocationDropdown;