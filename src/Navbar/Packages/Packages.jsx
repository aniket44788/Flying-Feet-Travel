
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./packages.css"
import Footer from "../Home/Footer/Footer";
import Packageworking from "./PackageWork/Packageworking";
function Packages() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("http://localhost:5678/packageget");
        const data = await response.json();
        setPackages(data.result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  if (loading) return
  <div class="loader">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <div class="bar4"></div>
    <div class="bar5"></div>
    <div class="bar6"></div>
    <div class="bar7"></div>
    <div class="bar8"></div>
    <div class="bar9"></div>
    <div class="bar10"></div>
    <div class="bar11"></div>
    <div class="bar12"></div>
  </div>
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="package-title"> OUR  DOMESTIC  PACKAGES</div>
      <div className="package-list">
        {packages.map((pkg) => (
          <div key={pkg._id} className="package-card">
            <div className="card-image">
              <img
                src={`http://localhost:5678/${pkg.file.replace(/\\/g, "/")}`}
                alt={pkg.trekTitle}
                className="card-main-image"
              />
              <span className="card-label">{pkg.trekTitle}</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">⚡ {pkg.trekTitle}</h3>
              <p className="card-duration">🕒 {pkg.trekTiming}</p>
              <p className="card-location">🛫 {pkg.trekPickup}</p>

              <div className="card-price">
                <div className="price-values">
                  <span className="old-price">{`₹${pkg.oldprice}`}</span>
                  <span className="new-price">{`₹${pkg.newprice}`}</span>
                </div>

                <button
                  className="read-more-btn"
                  onClick={() => navigate(`/packageget/${pkg._id}`)}
                >
                  Read More
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      <Packageworking />
      <Footer />

    </>
  );
}

export default Packages