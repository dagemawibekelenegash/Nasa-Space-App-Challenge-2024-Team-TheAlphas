import React, { useState, useEffect } from 'react';
import './Weather.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('Addis Ababa'); 
    const [inputCity, setInputCity] = useState(''); 

    const apiKey = '0a4bcd5eff854e1be5e272cb9c43fa85';
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const response = await fetch(baseUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchWeather();
    }, [baseUrl]); 

    const handleSearch = (e) => {
        e.preventDefault();
        if (inputCity.trim() !== '') {
            setCity(inputCity);
            setInputCity(''); 
            setLoading(true); 
        }
    };

    if (loading) {
        return <div className="loading">Loading weather...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <div className="weather-container">
            <h2>Weather in {weatherData.name}</h2>
            <form className="search-form" onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="weather-info">
                <div className="temperature">{weatherData.main.temp}°C</div>
                <div className="description">{weatherData.weather[0].description}</div>
                <div>
                    <h5>Wind Speed</h5>
                    {weatherData.wind.speed} m/s
                </div>
                <div>
                    <h5>Humidity</h5>
                    {weatherData.main.humidity}%
                </div>
            </div>
        </div>
    );
};

export default Weather;
