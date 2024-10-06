// src/components/Dashboard/content/Content.jsx
import React, { useState } from "react";
import "./Content.css"; // CSS for styling the content
import Sidebar from "../sidebar/Sidebar"; // Path to Sidebar component

export default function Content() {
  const [activeSection, setActiveSection] = useState("overview"); // Track active section

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <div className="dashboard-section">Farm Overview Content</div>;
      case "crop":
        return <div className="dashboard-section">Crop Planning Assistant Content</div>;
      case "water":
        return <div className="dashboard-section">Water Resource Analyzer Content</div>;
      default:
        return null; // Return nothing for unrecognized section
    }
  };

  return (
    <div className="content-container">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="content">{renderContent()}</div>
    </div>
  );
}
