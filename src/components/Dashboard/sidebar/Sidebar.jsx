// src/components/Dashboard/sidebar/Sidebar.jsx
import React from "react";
import "./Sidebar.css"; // CSS for styling the sidebar

export default function Sidebar({ setActiveSection }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveSection("overview")}>Overview</li>
        <li onClick={() => setActiveSection("crop")}>Crop Planning Assistant</li>
        <li onClick={() => setActiveSection("water")}>Water Resource Analyzer</li>
      </ul>
    </div>
  );
}
