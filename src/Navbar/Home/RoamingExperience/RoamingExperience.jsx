import React from 'react';
import './RoamingExperience.css';
import clip from "../RoamingExperience/clip.mp4"
import { FaBolt } from "react-icons/fa";

const RoamingExperience = () => {
  return (
    <div className="roaming-container">
      <div className="roaming-left">
        <video className='video-clip' src={clip} autoPlay loop muted />
      </div>

      <div className="roaming-right">
        <h1 className="roaming-title">
          Redefining Roaming <span>Experiences</span>
        </h1>
        <p className="roaming-description">
          We merge creativity with technology to build transformative digital experiences. <br />
          Our human-centered approach drives innovation that matter
        </p>

        <div className="roaming-stats">
          <div className="stat-box">
            <h2 style={{ color: '#009688' }}>520+</h2>
            <p>Tours Provided</p>
          </div>
          <div className="stat-box">
            <h2 style={{ color: '#007bff' }}>98%</h2>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat-box">
            <h2 style={{ color: '#9c27b0' }}>150+</h2>
            <p>Global Partners</p>
          </div>
        </div>

        <div className="roaming-feature">
          <div className="feature-icon"><FaBolt /></div>
          <div>
            <h4>Flying Feet Holidays</h4>
            <p>Flexible itineraries for seamless and speedy getaways</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoamingExperience;
