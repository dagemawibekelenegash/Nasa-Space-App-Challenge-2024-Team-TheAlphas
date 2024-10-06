import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <h2>Welcome</h2>
        <h1>Agro Flow</h1>
        <p>
        A platform dedicated to helping farmers make <br/>the most of their water resources while staying ahead of extreme weather events.</p>
        <Link to="/auth">
          <button className='button'>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
