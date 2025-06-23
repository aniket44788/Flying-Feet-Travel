import { useParams } from "react-router-dom";
import { FaHeadphones, FaStar, FaLifeRing, FaDollarSign, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from "react";
import "./packagedetails.css";
import Footer from "../Home/Footer/Footer";

function PackageDetails() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);


  
  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await fetch(`http://localhost:5678/packageget/${id}`);
        const data = await res.json();
        setPkg(data.result || data);
      } catch (err) {
        console.error("Error fetching detail:", err);
      }
    };
    fetchPackage();
  }, [id]);

  if (!pkg) return <p>Loading full details...</p>;

  return (
    <>

      <div className="setbox">




        <div className="package-detail-container">
          <img
            src={`http://localhost:5678/${pkg.file.replace(/\\/g, "/")}`}
            alt={pkg.trekTitle}
            className="package-detail-image"
          />
          <h2 className="detail-trek-title">🏞️ {pkg.trekTitle}</h2>
          {/* 
          <div className="price-values">

            <span className="old-price">{`₹${pkg.oldprice}`}</span>
            <span className="new-price">{`₹${pkg.newprice}`}</span>
          </div> */}

          <div className="package-detail-content">
            <h1 className="main-title">{pkg.mainTitle}</h1>
            <p className="detail-main-para">{pkg.mainPara}</p>


            <div className="detail-info-grid">
              <p><strong>⏰ Time:</strong> {pkg.trekTiming}</p>
              <p><strong>👥 Group:</strong> {pkg.trekGroup} </p>
              <p><strong>📍 Pickup:</strong> {pkg.trekPickup}</p>
            </div>

            <div className="detail-itinerary">
              <h3 className="iti-title" >🧭 Itinerary</h3>
              <h4>{pkg.itineraryTitle}</h4>
              <p>{pkg.itineraryList}</p>
              <h4>{pkg.itineraryTitle2}</h4>
              <p>{pkg.itineraryList2}</p>
              <h4>{pkg.itineraryTitle3}</h4>
              <p>{pkg.itineraryList3}</p>
              <h4>{pkg.itineraryTitle4}</h4>
              <p>{pkg.itineraryList4}</p>
              <h4>{pkg.itineraryTitle5}</h4>
              <p>{pkg.itineraryList5}</p>
              <h4>{pkg.itineraryTitle6}</h4>
              <p>{pkg.itineraryList6}</p>
              <h4>{pkg.itineraryTitle7}</h4>
              <p>{pkg.itineraryList7}</p>
            </div>

            <div className="detail-extra">
              <h4>📌 Meeting Point</h4>
              <p>{pkg.meetingPointTitle}</p>

              <h4>📝 Description</h4>
              <p>{pkg.trekDescription}</p>

              <h4>📅 Duration</h4>
              <p>{pkg.duration}</p>

              <h4>🏧 ATM Nearby</h4>
              <p>{pkg.atm}</p>
            </div>
          </div>
        </div>


        <div className="enquiry-container">
          <h2 className="detail-trek-title"> 🏞️{pkg.trekTitle}</h2>

          <div className="enquiry-price">
            <h3>Book your trip in just</h3>
            <span className="enquiry-old-price"> ₹{pkg.oldprice}</span>
            <span className="enquiry-new-price">₹{pkg.newprice}</span>
          </div>

          <form className="enquiry-form">
            <label>Your name *</label>
            <input type="text" placeholder="Your Name" required />

            <label>Your email *</label>
            <input type="email" placeholder="Your Mail" required />

            <label>Phone</label>
            <input type="tel" placeholder="E.g. +097369 71825" />

            <label>Trek Name</label>
            <input type="text" placeholder="E.g. Trek Name" value={pkg.trekTitle} readOnly />

            <label>No of Persons</label>
            <input type="number" placeholder="E.g. 10" />

            <label>Trek Date</label>
            <input type="date" />

            <button type="submit"> Submit </button>
          </form>
          
            <br />
            <br />
 <div className="why-book-container">
      {/* Why Book With Us Section */}
      <div className="why-book">
        <h2 className="section-title">Why Book With Us?</h2>
        <ul className="features-list">
          <li><span className="icon">💲</span>No-hassle best price guarantee</li>
          <li><span className="icon">🎧</span>Customer care available 24/7</li>
          <li><span className="icon">⭐</span>Hand-picked Tours & Activities</li>
          <li><span className="icon">🛟</span>Free Travel Insurance</li>
        </ul>
      </div>
<br />
<br />

      {/* Contact Section */}
      <div className="contact-box">
        <h3 className="contact-title">Get a Question?</h3>
        <p className="contact-text">
          Do not hesitate to give us a call. We are an expert team and we are happy to talk to you.
        </p>
        <div className="contact-info">
          <div className="phone"><span className="icon">📞</span>+7807812028</div>
          <div className="email"><span className="icon">✉️</span> flyingfeetholidays@gmail.com</div>
        </div>
      </div>
    </div>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default PackageDetails;
