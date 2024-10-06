import React, { useState } from 'react';
import './Auth.css';

export default function Auth() {
  const [isSignIn, setIsSignIn] = useState(true); 
  const toggleForm = () => {
    setIsSignIn(!isSignIn); 
  };

  return (
    <div className="auth-container">
      {isSignIn ? (
        <div className="form-section">
          <h1>Login</h1>
          <label>UserName</label>
          <input type="text" placeholder="Username" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button className="auth-button">Login</button>
          <p>Don't have an account? <button className="toggle-button" onClick={toggleForm}>Sign Up</button></p>
        </div>
      ) : (
        <div className="form-section">
          <h3>Create Account</h3>
          <button className="social-button">Sign Up with Google</button>
          <button className="social-button">Sign Up with Facebook</button>
          <h3>OR</h3>
          <label>First Name</label>
          <input type="text" placeholder="First Name" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Password</label>
          <input type="password" placeholder="Password" />
          <button className="auth-button">Create Account</button>
          <p>Already have an account? <button className="toggle-button" onClick={toggleForm}>Login</button></p>
        </div>
      )}
    </div>
  );
}
