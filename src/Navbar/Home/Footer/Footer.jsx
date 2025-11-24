import React from 'react'
import "./footer.css"
import kila from "../Tour Images/shimla.png"
import tajmahal from "../Tour Images/dharamshala.png"
import minar from "../Tour Images/kasol.png"
import mountain from "../Tour Images/ataltunnel.png"
function Footer() {
  return (
    <>
    
     <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p><strong>Call Now</strong> – <a >+91-83518-46490</a></p>
          <p><strong>Email</strong> – <a href="mailto: holidaysflyingfeet@gmail.com">holidaysflyingfeet@gmail.com</a></p>
          <p><strong>Address</strong> – Near Bus Stand, Bhagsunag Rd, McLeod Ganj, Dharamshala, Himachal Pradesh 176219</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Link</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/packages">Packages</a></li>
            <li><a href="/destination">Destination </a></li>
            <li><a href="/festival">Festival</a></li>
            <li><a href="/blog">Blog</a></li>
        
          </ul>
        </div>

        {/* Image Gallery */}
        <div className="footer-section gallery">
          <div className="gallery-grid">
           <img src={kila} alt="Gallery 1" />
            <img src={minar} alt="Gallery 2" />
            <img src={tajmahal} alt="Gallery 3" />
            <img src={mountain} alt="Gallery 4" />
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer