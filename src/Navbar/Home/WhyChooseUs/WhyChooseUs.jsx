import React from 'react';
import './WhyChooseUs.css';
import { FaGlobeAsia, FaHeadset, FaHandHoldingUsd } from "react-icons/fa";

const features = [
  {
    icon: <FaGlobeAsia size={40} color="#007bff" />,
    title: '100+ Destinations',
    desc: 'Explore our wide selection of destinations across all continents.',
    bg: '#e6f0ff',
  },
  {
    icon: <FaHandHoldingUsd size={40} color="#ff7b00" />,
    title: 'Best Price Guarantee',
    desc: 'We offer competitive prices with no hidden fees.',
    bg: '#fff2e6',
  },
  {
    icon: <FaHeadset size={40} color="#00c4cc" />,
    title: '24/7 Support',
    desc: 'Our travel experts are available anytime to assist you.',
    bg: '#e6faff',
  }
];

const WhyChooseUs = () => {
  return (
    <div className="why-container">
      <h2 className="why-heading">Flying Feet  Travels?</h2>
      <p className="why-subtext">
        We provide exceptional travel experiences with attention to every detail
      </p>

      <div className="why-boxes">
        {features.map((item, index) => (
          <div className="why-box" key={index}>
            <div className="why-icon" style={{ backgroundColor: item.bg }}>
              {item.icon}
            </div>
            <h3 className="why-title">{item.title}</h3>
            <p className="why-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
