import React from 'react';
import './Content.css';

const Content = () => {
    return (
      <div className="main-content">
          <h2>Water Resource Analysis</h2>
          <div className="info-boxes">
              <div className="info-box">
                  <h3>Total Water Consumption</h3>
                  <p>5000 Liters</p>
                  <p>From last week: +10%</p>
              </div>
              <div className="info-box">
                  <h3>Water Efficiency</h3>
                  <p>80%</p>
                  <p>From last week: -5%</p>
              </div>
              <div className="info-box">
                  <h3>Crop Health Index</h3>
                  <p>75%</p>
                  <p>From last week: +2%</p>
              </div>
          </div>

          <div className="wallet-box">
              <h3>Crop Planning Assistant</h3>
              <div className="card">
                  <p>Next Planting Date: <strong>October 15, 2024</strong></p>
                  <p>Recommended Crops: <strong>Maize, Beans</strong></p>
                  <p>Expected Yield: <strong>2000 Kg</strong></p>
              </div>
          </div>
      </div>
    );
}

export default Content;
