import React from 'react';
import './ourStory.css';
import self from '../Our Story/self.jpeg';

function OurStory() {
    return (
        <div className="main-head">
            <div className="our-story-container">
                <div className="our-story-image">
                    <img src={self} alt="Owner of Lord Krishna Travels" />
                </div>
                <div className="our-story-content">
                    <h2>Our Story</h2>
                    <p>
                        <strong>Flying Feet Travels</strong> Your Gateway to Incredible North India! 📍 G3, H7, Aggarwal Plaza, Netaji Subhash Place, Shakurpur, Delhi – 110034 📞 08048035681 📧 packages@lordkrishnatravels.in
                    </p>
                    <p>
                     <strong> About Us </strong> : At Lord Krishna Travels, we specialize in crafting unforgettable journeys across North India. With years of expertise in the travel industry, we are your trusted partner for customized travel experiences.
                    </p>
                  
                </div>
            </div>
        </div>
    );
}

export default OurStory;
