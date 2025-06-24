import React from 'react'
import "./packagework.css"
function Packageworking() {
    
const steps = [
  {
    icon: "📋",
    title: "Enquire Now",
    description:
      "You can send us an enquiry by filling the web form, emailing us, via online or WhatsApp chat, or simply giving us a call.",
  },
  {
    icon: "👤",
    title: "Connect With a Tour Consultant",
    description:
      "Our consultants are always ready to discuss your unique travel requirements and provide expert travel advice.",
  },
  {
    icon: "📖",
    title: "Get Travel Itineraries",
    description:
      "Decide your custom tour itinerary, make the required changes, and pay in advance to finalize your tour plan with us.",
  },
  {
    icon: "✔️",
    title: "Get Your Tour Confirmed",
    description:
      "After getting everything planned and confirmed, expect nothing but an exceptional travel experience with Pearl Lanka.",
  },
];

  return (
    <>

  <section className="howitworks-section">
    <h2 className="howitworks-title">HOW WE WORKS?</h2>
    <div className="howitworks-steps">
      {steps.map((step, idx) => (
        <div className="howitworks-card" key={idx}>
          <div className="howitworks-icon">{step.icon}</div>
          <h3 className="howitworks-card-title">{step.title}</h3>
          <p className="howitworks-card-desc">{step.description}</p>
        </div>
      ))}
    </div>
  </section>

    
    </>
  )
}

export default Packageworking