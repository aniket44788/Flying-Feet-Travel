import React, { useState } from 'react';
import "../Triund/triund.css"
import mcleodganjimg from "../Mcleodganj/mcleodganjimg.jpg"

function Mcleodganj() {
    const [showFullText, setShowFullText] = useState(false);

    const mcleodganjData = [
        {
            id: 1,
            image: mcleodganjimg,
            date: "24-06-2024",
            title: "McLeodGanj - The Little Lhasa of India",
            description:
                "Nestled in the Dhauladhar range of Himachal Pradesh, McLeodGanj is a cultural and spiritual hub known for its vibrant Tibetan community, stunning monasteries, and scenic landscapes. It is the official residence of His Holiness the 14th Dalai Lama and attracts travelers, spiritual seekers, and backpackers from all over the world. In this guide, Hill Hikers explores the best seasons to experience McLeodGanj’s charm to help you plan your perfect trip.",
        },
        {
            title: "Spring (March to April) – Spiritual Calm with Blooming Beauty",
            description: "McLeodGanj in spring is peaceful and fresh. The flowers bloom, the air is crisp, and the monasteries hum with quiet meditation. It's perfect for sightseeing, trekking, and spiritual retreats.",
            temperature: "12°C to 22°C",
            highlights: "Cherry blossoms, peaceful monasteries, Tibetan new year",
            travelTip: "Carry a shawl or light jacket, and don’t miss morning prayers at Namgyal Monastery",
            extra: "Visit during Losar Festival to witness vibrant Tibetan celebrations."
        },
        {
            title: "Summer (May to June) – A Cool Himalayan Getaway",
            description: "The town remains pleasantly cool while the plains heat up. Tourist activity peaks with travelers exploring cafes, waterfalls, and treks to Triund or Bhagsu.",
            temperature: "18°C to 28°C",
            highlights: "Vibrant cafés, street markets, Triund basepoint, local music",
            travelTip: "Book your stay early due to peak crowd and explore early mornings to avoid rush.",
            extra: "A great time for food walks, sunset points, and scenic photography."
        },
        {
            title: "Monsoon (July to September) – Lush Landscapes and Tranquility",
            description: "The rain turns McLeodGanj into a green paradise. While trekking may be limited, it's a great time for peaceful stays, café hopping, and reflection.",
            temperature: "16°C to 24°C",
            highlights: "Misty trails, lesser crowds, vibrant green cover",
            travelTip: "Carry good waterproof shoes and enjoy scenic views from indoors.",
            extra: "Ideal for writers, solo travelers, and those who enjoy quiet over chaos."
        },
        {
            title: "Autumn (October to November) – Festivals and Himalayan Vistas",
            description: "Clear skies, chilly air, and colorful autumn trees make this one of the best times to visit. Tibetan and Hindu festivals brighten the town.",
            temperature: "10°C to 18°C",
            highlights: "Colorful foliage, clean air, festive lights",
            travelTip: "Perfect for scenic hikes to Dharamkot or Bhagsu Nag waterfall.",
            extra: "Bring layered clothing as it gets cold after sunset."
        },
        {
            title: "Winter (December to February) – Quiet Retreat with Snowy Peaks",
            description: "Winter brings snow to upper regions and cozy vibes to the town. Fewer tourists make it ideal for peaceful stays.",
            temperature: "2°C to 10°C",
            highlights: "Snow-capped mountains, bonfires, Tibetan food",
            travelTip: "Warm clothes are a must. Avoid long hikes without a guide due to snow.",
            extra: "Watch the snowfall from a rooftop café with a hot bowl of thukpa."
        }
    ];

    const anotherdata = [
        {
            title: "Local Tips from Hill Hikers",
            heading: "Try the momos and butter tea from street vendors",
            heading2: "Respect the monasteries’ silence zones",
            heading3: "Avoid plastic – McLeodGanj is an eco-sensitive area",
            heading4: "Bhagsunag and Dal Lake are great for short day hikes"
        }
    ];

    const footer = [
        {
            title: "Conclusion – Is McLeodGanj Worth Visiting?",
            plan: "Absolutely. McLeodGanj offers a soulful experience – whether you're meditating in a monastery, hiking a trail, sipping coffee while journaling, or just breathing in the mountain air. Choose the season that suits your vibe – spring for blooms, summer for cafes, monsoon for peace, autumn for views, or winter for snow.",
            last: "Plan your McLeodGanj trip today with Hill Hikers – Your Gateway to the Himalayas."
        }
    ];

    const shortText = mcleodganjData[0].description.slice(0, 220) + '...';

    return (
        <div className="triund-container">
            <div className="triund-card">
                <img src={mcleodganjData[0].image} alt="McLeodGanj" />
                <h2>{mcleodganjData[0].title}</h2>
                <p><strong>Date:</strong> {mcleodganjData[0].date}</p>
                <p>{showFullText ? mcleodganjData[0].description : shortText}</p>
                <button className="read-btn" onClick={() => setShowFullText(!showFullText)}>
                    {showFullText ? 'Read Less' : 'Read More'}
                </button>
            </div>

            {showFullText && (
                <>
                    <div className="season-wrapper show">
                        {mcleodganjData.slice(1).map((item, index) => (
                            <div key={index} className="season-card">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p><strong>Temperature:</strong> {item.temperature}</p>
                                <p><strong>Highlights:</strong> {item.highlights}</p>
                                <p><strong>Travel Tip:</strong> {item.travelTip}</p>
                                <p><strong>Extra:</strong> {item.extra}</p>
                            </div>
                        ))}
                    </div>
                    <div className="another-data">
                        {anotherdata.map((data, index) => (
                            <div key={index} className="season-wrapper show">
                                <div className="season-card">
                                    <h3>{data.title}</h3>
                                    <p>• {data.heading}</p>
                                    <p>• {data.heading2}</p>
                                    <p>• {data.heading3}</p>
                                    <p>• {data.heading4}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="another-data">
                        {footer.map((data, index) => (
                            <div key={index} className="season-wrapper show">
                                <div className="season-card">
                                    <h3>{data.title}</h3>
                                    <p>{data.plan}</p>
                                    <p><strong>{data.last}</strong></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default Mcleodganj;
