import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Water Management Dashboard</h2>
            <ul>
                <li><Link to="sections/water-resource-analyzer">Water Resource Analyzer</Link></li>
                <li><Link to="sections/crop-planning-assistant">Crop Planning Assistant</Link></li>
                <li><Link to="sections/help">Help</Link></li>
                <li><Link to="sections/settings">Settings</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
