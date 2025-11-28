import React, { useState } from 'react'
import kashmir from "../Home/Tour Images/kashmir.jpeg"
import goa from "../Home/Tour Images/goa.jpeg"
import kerala from "../Home/Tour Images/kerala.jpeg"
import darjeeling from "../Home/Tour Images/darjeeling.jpeg"
import mcleodganj from "../Home/Tour Images/mcleodganj.jpeg"
import EnquiryModal from '../EnquiryModal'
import "./latesttour.css"

function Latesttours() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [selectedTour, setSelectedTour] = useState(null);

    const tours = [
        {
            id: 1,
            image: kashmir,
            title: "Kashmir - Paradise on Earth",
            location: "Jammu & Kashmir",
            duration: "5 Days / 4 Nights",
            price: "₹13,999",
            rating: "4.8",
            reviews: "1.2k",
            description: "Experience the breathtaking beauty of Kashmir with snow-capped mountains, serene Dal Lake, and lush valleys. Explore Srinagar's houseboats, Gulmarg's skiing slopes, and Pahalgam's meadows.",
            highlights: ["Dal Lake Shikara Ride", "Gulmarg Gondola", "Mughal Gardens", "Pahalgam Valley"],
            badge: "Popular"
        },
        {
            id: 2,
            image: goa,
            title: "Goa - Beach Paradise",
            location: "Goa",
            duration: "4 Days / 3 Nights",
            price: "₹9,999",
            rating: "4.7",
            reviews: "980",
            description: "Discover the vibrant beaches and Portuguese heritage of Goa. Enjoy water sports, beach parties, historic churches, and delicious seafood. Perfect blend of relaxation and adventure.",
            highlights: ["Beach Hopping", "Water Sports", "Fort Aguada", "Night Markets"],
            badge: "Trending"
        },
        {
            id: 3,
            image: kerala,
            title: "Kerala - God's Own Country",
            location: "Kerala",
            duration: "5 Days / 4 Nights",
            price: "₹15,999",
            rating: "4.9",
            reviews: "1.5k",
            description: "Immerse yourself in Kerala's backwaters, tea plantations, and tranquil beaches. Experience traditional houseboats, ayurvedic treatments, and the rich cultural heritage of South India.",
            highlights: ["Houseboat Stay", "Tea Plantations", "Ayurvedic Spa", "Kathakali Show"],
            badge: "Best Seller"
        },
        {
            id: 4,
            image: darjeeling,
            title: "Darjeeling - Queen of Hills",
            location: "West Bengal",
            duration: "5 Days / 4 Nights",
            price: "₹14,999",
            rating: "4.6",
            reviews: "850",
            description: "Witness the majestic Kanchenjunga from Darjeeling's hills. Ride the famous toy train, visit tea estates, and explore Buddhist monasteries. A perfect hill station getaway.",
            highlights: ["Tiger Hill Sunrise", "Toy Train Ride", "Tea Garden Tour", "Himalayan Zoo"],
            badge: "New"
        },
        {
            id: 5, // Fixed duplicate ID
            image: mcleodganj,
            title: "Mcleodganj - Triund tour with us",
            location: "Kangra , Himachal Pradesh",
            duration: "4 Days / 3 Nights",
            price: "₹4,999",
            rating: "4.6",
            reviews: "850",
            description: "Experience the vibrant Tibetan culture of McLeodGanj. Visit ancient monasteries, enjoy peaceful cafes, explore local markets, and soak in the spiritual atmosphere of the Himalayas.",
            highlights: ["Triund Trek", "Dalai Lama Temple", "Bhagsu Waterfall", "Local Tibetan Market"],
            badge: "Popular"
        }
    ]

    const handleEnquiryClick = (tour) => {
        setSelectedTour(tour);
        setIsEnquiryOpen(true);
    };

    return (
        <section className="tours-section">
            <div className="tours-container">

                {/* Header */}
                <div className="section-header">
                    <span className="badge">Explore Destinations</span>
                    <h2 className="heading">
                        Latest <span className="gradient-text">Tours</span>
                    </h2>
                    <p className="subheading">
                        Discover our handpicked destinations and create unforgettable memories
                    </p>
                    <div className="divider">
                        <span className="line"></span>
                        <span className="dot"></span>
                    </div>
                </div>

                {/* Alternating Tours */}
                <div className="tours-grid">
                    {tours.map((tour, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <article
                                key={tour.id}
                                className={`tour-item ${isEven ? 'image-left' : 'image-right'}`}
                            >
                                {/* Image Side */}
                                <div className="tour-image-wrapper">
                                    <img
                                        src={tour.image}
                                        alt={tour.title}
                                        className="tour-image"
                                    />
                                    <div className="image-overlay"></div>

                                    {/* Badge & Price on Image */}
                                    <div className="badge-on-image">{tour.badge}</div>

                                    <div className="rating-badge">
                                        <svg className="star" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        <span>{tour.rating}</span>
                                        <small>({tour.reviews})</small>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="tour-content">
                                    <h3 className="tour-title">{tour.title}</h3>

                                    <div className="info-chips">
                                        <div className="chip location">
                                            <div className="chip-icon bg-blue"></div>
                                            {tour.location}
                                        </div>
                                        <div className="chip duration">
                                            <div className="chip-icon bg-purple"></div>
                                            {tour.duration}
                                        </div>
                                    </div>

                                    <p className="tour-desc">{tour.description}</p>

                                    <div className="highlights-box">
                                        <h4><span className="highlight-bar"></span> Tour Highlights</h4>
                                        <div className="highlights-grid">
                                            {tour.highlights.slice(0, 6).map((h, i) => (
                                                <div key={i} className="highlight-item">
                                                    <div className="check-icon"></div>
                                                    <span>{h}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="action-buttons">
                                        <button className="btn-primary price-btn">
                                            {tour.price}
                                            <svg viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                                        </button>

                                        <button
                                            className="btn-primary enquiry-btn"
                                            onClick={() => handleEnquiryClick(tour)}
                                        >
                                            Get Enquiry
                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>

                                        <button className="btn-favorite">
                                            <svg viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>

            {/* Enquiry Modal - Placed outside the loop */}
            <EnquiryModal
                isOpen={isEnquiryOpen}
                onClose={() => {
                    setIsEnquiryOpen(false);
                    setSelectedTour(null);
                }}
                tour={selectedTour}
            />
        </section>
    );
}

export default Latesttours