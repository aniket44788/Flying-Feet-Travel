import React from 'react'
import "./locationmap.css"

function LocationMap() {
  return (
     <div className="map-container" data-aos = "fade-up">
      <h2 className="map-title">Our Location</h2>
      <div className="map-frame">
        <iframe
          title="Hotel Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1977.2672359794856!2d76.30222057108526!3d32.251917403748514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1743944954766!5m2!1sen!2sin"
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