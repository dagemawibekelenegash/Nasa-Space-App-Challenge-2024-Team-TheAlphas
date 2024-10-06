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
        <div className="about-hero-text">
          <h2>Original & Natural</h2>
          <h1>Agriculture Matter<br />Good Production</h1>
          <p>Disuse ecstatic and properly saw entirely sir why laughter endeavor.</p>
          <a href="#" className="btn-discover">Discover More</a>
        </div>
      </section>

      <div className="about-container">
        <div className="about-intro-section">
          <div className="about-image-box">
            <img src={img1} alt="Agriculture Field" />
            <div className="about-project-info">
              <h2>86,700</h2>
              <p>Successfully Projects Completed</p>
            </div>
          </div>
          <div className="about-text-box">
            <h1>Pure Agriculture and Organic Form</h1>
            <h3>We're Leader in Agriculture Market</h3>
            <p>
              There are many variations of passages of available but the majority have suffered alteration in some form, by injected humour or randomised words even slightly believable.
            </p>
            <ul>
              <li>Organic food contains more vitamins</li>
              <li>Eat organic because supply meets demand</li>
              <li>Organic food is never irradiated</li>
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
            <p>Frontend Developer & Designer</p>
          </div>
          <div className="about-team-member">
            <img src={team2} alt="Team Member 2" />
            <h3>Kaleab Yohannes Hilawie</h3>
            <p>Lead Backend Developer</p>
          </div>
          <div className="about-team-member">
            <img src={team3} alt="Team Member 3" />
            <h3>Abrham Yishak Yifat</h3>
            <p>Frontend Developer and Data Analyst</p>
          </div>
          <div className="about-team-member">
            <img src={team4} alt="Team Member 4" />
            <h3>Biruk Abza Geremew</h3>
            <p>Data Analyst and Frontend Developer</p>
          </div>
          <div className="about-team-member">
            <img src={team5} alt="Team Member 5" />
            <h3>Dagemawi Bekele Negash</h3>
            <p>Lead Frontend Developer</p>
          </div>
          <div className="about-team-member">
            <img src={team6} alt="Team Member 6" />
            <h3>Yonatan Yishak Yifat</h3>
            <p>Team Leader & Backend Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
