import React from 'react';
import './About.css';
import img1 from "../../assets/images/img1.jpg"; 
import team1 from "../../assets/images/team1.jpg"; 
import team2 from "../../assets/images/team2.jpg"; 
import team3 from "../../assets/images/team3.jpg"; 
import team4 from "../../assets/images/team4.jpg"; 
import team5 from "../../assets/images/team5.jpg"; 
import team6 from "../../assets/images/team6.jpg"; 

export default function About() {
  return (
    <div>
      <section className="about-hero">
        
        <div class="about-hero-text">
            <h2>Data-Driven & Sustainable</h2>
            <h1>Empowering Agriculture<br/>Enhanced Crop Productivity</h1>
            <p>Leveraging data-driven insights to make informed and strategic farming decisions</p>
            <a href="#" class="btn-discover">Discover More</a>
        </div>

      </section>

      <div className="about-container">
        <div className="about-intro-section">
          <div className="about-image-box">
            <img src={img1} alt="Agriculture Field" />
            
            <div class="about-project-info">
                   <h3>Globally</h3>
                    <h2>50-70% of farmers</h2>
                    <p>Benefit from such systems</p>
            </div>

          </div>
          
          <div class="about-text-box">
                <h1>Harvesting Innovation and Organic Growth</h1>

                
                <h3>Shaping the Future of Farming</h3>
                <p>
                  AgriFlow is a user-friendly web application designed to empower farmers by utilizing NASA's Earth observation data for improved water management and crop planning.
                </p>
                <ul>
                    <li>Offers real-time dashboards with data on precipitation, soil moisture, and drought indices</li>
                    <li>Combines satellite data with local insights and expert advice</li>
                    <li>Tackles water scarcity and crop sustainability, boosting productivity and resilience</li>
                </ul>
            </div>

        </div>
      </div>

      <section className="about-team-section">
        <h2>Meet Our Team</h2>
        <div className="about-team-grid">
          <div className="about-team-member">
            <img src={team1} alt="Team Member 1" />
            <h3>Fraol Bacha Megersa</h3>
            <p>project manager, UI/UX Designer</p>
          </div>
          <div className="about-team-member">
            <img src={team2} alt="Team Member 2" />
            <h3>Kaleab Yohannes Hilawie</h3>
            <p>Developer, Data Analyst</p>
          </div>
          <div className="about-team-member">
            <img src={team3} alt="Team Member 3" />
            <h3>Abrham Yishak Yifat</h3>
            <p>Developer, Data Analyst</p>
          </div>
          <div className="about-team-member">
            <img src={team4} alt="Team Member 4" />
            <h3>Biruk Geremew Abza</h3>
            <p>Data Analyst, Data Collection Specialist</p>
          </div>
          <div className="about-team-member">
            <img src={team5} alt="Team Member 5" />
            <h3>Dagemawi Bekele Negash</h3>
            <p>Lead Developer</p>
          </div>
          <div className="about-team-member">
            <img src={team6} alt="Team Member 6" />
            <h3>Yonatan Yishak Yifat</h3>
            <p>Data collection Specialist, Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
