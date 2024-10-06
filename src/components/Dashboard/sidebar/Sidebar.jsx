import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <h2>Dashboard</h2>
                <ul>
                <li><Link to="flood-forecast/FloodForecast" onClick={handleLinkClick}>Flood Forecast</Link > </li>
                <li><Link to="precipitation-history/PrecipitationHistory" onClick={handleLinkClick}>Precipitation History</Link > </li>
                <li><Link to="sections/Weather" onClick={handleLinkClick}>Today's Weather</Link > </li>
                    
                    
                    <li><Link to="sections/water-resource-analyzer" onClick={handleLinkClick}>Water Resource Analyzer</Link></li>
                    <li><Link to="sections/crop-planning-assistant" onClick={handleLinkClick}>Crop Planning Assistant</Link></li>
                    <li><Link to="sections/help" onClick={handleLinkClick}>Help</Link></li>
                    <li><Link to="sections/settings" onClick={handleLinkClick}>Settings</Link></li>
                </ul>
            </div>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? '◀' : '▶'}
            </button>
        </>
    );
}

export default Sidebar;