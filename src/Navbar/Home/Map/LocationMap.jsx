import React from 'react'
import "./locationmap.css"

function LocationMap() {
  return (
    <div className="map-container" data-aos="fade-up">
      <h2 className="map-title">Our Location</h2>
      <div className="map-frame">
        <iframe
          title="Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d289.88657526753366!2d76.32376014533469!3d32.23960456160697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e9!4m3!3m2!1d32.2396889!2d76.32369829999999!4m3!3m2!1d32.2396537!2d76.32374519999999!5e1!3m2!1sen!2sin!4v1763800182244!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>



    </div>
  )
}

export default LocationMap