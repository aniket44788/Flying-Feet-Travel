
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../packages.css"
function International() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("https://flying-feet-travel-backend.onrender.com/internationalget");
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

  if (loading) return <p>Loading packages...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
<>
<div className="package-title"> OUR  INTERNATIONAL  PACKAGES</div>
    <div className="package-list">
      {packages.map((pkg) => (
        <div key={pkg._id} className="package-card">
          <div className="card-image">
            <img
              src={`https://flying-feet-travel-backend.onrender.com/${pkg.file.replace(/\\/g, "/")}`}
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
                onClick={() => navigate(`/packages/internationalget/${pkg._id}`)}
              >
                Read More
              </button>
            </div>

          </div>
        </div>
      ))}
    </div>

    {/* <Packageworking/> */}
{/* <Footer/> */}

</>
  );
}

export default International