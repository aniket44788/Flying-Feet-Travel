import React from 'react'
import "./footer.css"
import kila from "../Tour Images/kila.png"
import tajmahal from "../Tour Images/tajmahal.png"
import minar from "../Tour Images/minar.png"
import mountain from "../Tour Images/mountain.png"
function Footer() {
  return (
    <>
    
     <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section contact-info">
          <h3>Contact Info</h3>
          <p><strong>Call Now</strong> – <a >+91-78078 12028</a></p>
          <p><strong>Email</strong> – <a href="mailto: flyingfeetholidays@gmail.com">flyingfeetholidays@gmail.com</a></p>
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