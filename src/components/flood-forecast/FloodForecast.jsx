import React, { useState } from 'react';
import './FloodForecast.css';

const FloodForecast = ({ data }) => {
  const cities = Object.keys(data);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [forecastData, setForecastData] = useState(data[selectedCity]);
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const datesPerPage = 5; 

  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    setForecastData(data[city]);
    setCurrentDateIndex(0); 
  };

  const analyzeData = () => {
    if (!forecastData || Object.keys(forecastData).length === 0) return "No data available.";

    const dates = Object.keys(forecastData);
    const currentDate = dates[currentDateIndex]; 
    const currentRainfall = forecastData[currentDate];

    const average = (Object.values(forecastData).reduce((sum, value) => sum + value, 0) / Object.values(forecastData).length).toFixed(2);
    const maxRainfall = Math.max(...Object.values(forecastData)).toFixed(2);
    const floodRisk =
      currentRainfall >= 20
        ? "High Flood Risk"
        : currentRainfall >= 10
        ? "Moderate Flood Risk"
        : "Low Flood Risk";

    return (
      <>
        Average Rainfall: {average} mm, Max Rainfall: {maxRainfall} mm.
        <span className="flood-risk">{` Flood Risk for ${currentDate}: ${floodRisk}`}</span>
      </>
    );
  };

  const handlePreviousDate = () => {
    if (currentDateIndex > 0) {
      setCurrentDateIndex(currentDateIndex - 1);
    }
  };

  const handleNextDate = () => {
    if (currentDateIndex < Math.min(currentDateIndex + 1, dates.length - 1)) {
      setCurrentDateIndex(currentDateIndex + 1);
    }
  };

  const dates = Object.keys(forecastData);
  const currentDate = dates[currentDateIndex];

  const startDateIndex = Math.floor(currentDateIndex / datesPerPage) * datesPerPage;
  const displayedDates = dates.slice(startDateIndex, startDateIndex + datesPerPage);

  return (
    <div className="flood-forecast">
      <label htmlFor="city-select">Select City:</label>
      <select id="city-select" value={selectedCity} onChange={handleCityChange}>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <h2>Flood Forecast for {selectedCity}</h2>
      <div className="forecast-analysis">
        <p>{analyzeData()}</p>
      </div>

      <div className="forecast-details">
        <h3>Daily Rainfall Data:</h3>
        <ul>
          {displayedDates.map((date) => (
            <li key={date}>
              {date}: {forecastData[date]} mm
            </li>
          ))}
        </ul>
      </div>

      <div className="pagination">
        <button onClick={handlePreviousDate} disabled={currentDateIndex === 0}>
          Previous
        </button>
        <span>{currentDate}</span>
        <button onClick={handleNextDate} disabled={currentDateIndex >= dates.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
};

export default FloodForecast;
