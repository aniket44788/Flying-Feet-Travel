import React from 'react';
import './herosection.css'; // If you're using external CSS
import heroImage from '../Blogturn/HeroImage.png';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p className="hero-subtitle">Together We Can Make Awesome Memories</p>
        <h1 className="hero-heading">
          Are You Ready To <br />
          Join Us On Your Next <br />
          Trip?
        </h1>
        {/* <button className="hero-button"><a className="hero-link" href="/blog">Visit Our Blog</a>
        </button> */}
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Travel Illustration" />
      </div>
    </div>
  );
}

export default HeroSection;
