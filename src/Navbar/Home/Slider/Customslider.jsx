import { useEffect, useState } from "react";
import React from 'react'
import "./customslider.css"
import tajmahal from "../Tour Images/tajmahal.png"
import kila from "../Tour Images/kila.png"
import mountain from "../Tour Images/mountain.png"
import minar from "../Tour Images/minar.png"

const customslider = () => {
  const images = [ tajmahal,kila, minar, mountain];
  const [state, setState] = useState(0);

  // Autoplay every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setState((state + 1) % images.length);
  };

  const prev = () => {
    setState((state - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${state * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div className="slide" key={idx}>
            <img src={img} alt={`slide-${idx}`} />
          </div>
        ))}
      </div>
      <button className="slider-button left" onClick={prev}>
        {"<"}
      </button>
      <button className="slider-button right" onClick={next}>
        {">"}
      </button>
    </div>
  );
};

export default customslider;
