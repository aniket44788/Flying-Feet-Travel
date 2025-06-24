import React, { useState } from 'react';
import './triund.css';
import triundImg from '../Triund/triund.jpg';

function Triund() {
    const [showFullText, setShowFullText] = useState(false);

    const triundData = [
        {
            id: 1,
            image: triundImg,
            date: "24-06-2024",
            title: "Triund Trek",
            description:
                "Triund Trek, one of the most scenic and beginner-friendly treks in Himachal Pradesh, offers an unforgettable experience for nature lovers and adventure seekers alike. Whether you’re traveling solo, with friends, or on a family outing, the Triund Trek promises breathtaking views of the Dhauladhar mountain range and the lush Kangra Valley. But an essential question every trekker asks is: What is the best time to visit Triund Trek? In this blog, Hill Hikers breaks down the seasonal details to help you plan the perfect trip to Triund.",
        },
        {
            title: "Spring (March to April) - Fresh Blooms and Pleasant Weather",
            description: "Spring is often considered the best time to visit Triund Trek. The snow starts to melt, revealing green trails, blooming rhododendrons, and crisp mountain air. This season is ideal for beginners and families.",
            temperature: "10°C to 20°C",
            highlights: "Flower-covered paths, clear skies, and gentle weather",
            travelTip: "Carry light woolens for the night and sunblock for the day",
            extra: "This season offers one of the most photogenic landscapes, with the snow-capped Dhauladhar range contrasting beautifully against the newly green valleys.",
        },
        {
            title: "Summer (May to June) - Cool Escape from the Heat",
            description: "When most of India is scorching under the summer sun, the Triund region stays pleasantly cool. Trekkers from cities flock to Dharamshala and Mcleodganj to begin this rewarding hike.",
            temperature: "15°C to 25°C",
            highlights: "Refreshing winds, lush forest paths, vibrant trekking groups",
            travelTip: "Start your trek early in the day to avoid strong afternoon sun",
            extra: "Summer is the peak season, so expect more crowds. But if you enjoy social treks and camping under starry skies, this is your ideal time.",
        },
        {
            title: "Monsoon (July to September) – For the Bold and Brave",
            description: "The monsoon brings lushness to the landscape but also poses challenges. The trails become slippery, and frequent showers can affect visibility.",
            temperature: "14°C to 22°C",
            highlights: "Misty forests, dramatic clouds, fewer tourists",
            travelTip: "Only experienced trekkers should go; carry rain gear and check weather forecasts",
            extra: "While not typically recommended as the best time to visit Triund Trek, the monsoon does appeal to nature photographers and solitude seekers",
        },
        {
            title: "Autumn (October to November) – Clear Views and Crisp Air",
            description: "After the rains, nature puts on a grand display. The skies are clear, the weather is dry, and the visibility is perfect for panoramic views of the Himalayas.",
            temperature: "8°C to 18°C",
            highlights: "Bright blue skies, golden forests, ideal trekking conditions",
            travelTip: " Pack layers, as it can get chilly after sunset",
            extra: "This is another best time to visit Triund Trek, especially for those looking for peace, clean air, and photography.",
        },
        {
            title: "Winter (December to February) – A Snowy Wonderland",
            description: "For those craving snow, winter offers a magical (but more challenging) version of Triund. The trail often gets covered with snow, and camping may not be allowed during heavy snowfall.",
            temperature: "0°C to 10°C",
            highlights: "Snow-capped trees, silence, adventure",
            travelTip: " Trek only with a certified guide, like those from Hill Hikers",
            extra: "Only experienced and well-prepared trekkers should attempt this season. The reward? Unmatched beauty and a once-in-a-lifetime experience..",
        }
    ];
    const anotherdata = [{
        title: "Local Tips from Hill Hikers",
        heading: "Weekday treks are better for avoiding crowds",
        heading2: "Book with a local trekking agency for safety, permits, and camping support",
        heading3: "Check for Triund trek weather forecast before you go",
        heading4: "Don’t forget to carry a power bank, water bottle, and basic medical kit"
    }]
    const footer = [
        {
            title: "Conclusion Should You Go",
            plan: "While each season has its charm, the best time to visit Triund Trek truly depends on your travel goals. If you love flowers and green trails, go in spring. If snow is your thing, pick winter with precautions. For the clearest skies and perfect weather, autumn is your best bet No matter when you choose to visit, Triund offers magic and memories. And with Flying feet travel, your adventure is guided, safe, and unforgettable.",
            last: "Plan your Triund Trek today with Hill Hikers – Your Himalayan Trekking Experts."
        }
    ]

    const shortText = triundData[0].description.slice(0, 220) + '...';

    return (
        <div className="triund-container">
            {/* Main Section */}
            <div className="triund-card">
                <img src={triundData[0].image} alt="Triund" />
                <h2>{triundData[0].title}</h2>
                <p><strong>Date:</strong> {triundData[0].date}</p>
                <p>{showFullText ? triundData[0].description : shortText}</p>
                <button className="read-btn" onClick={() => setShowFullText(!showFullText)}>
                    {showFullText ? 'Read Less' : 'Read More'}
                </button>
            </div>

            {/* Additional Sections */}
            {showFullText && (
                <>
                    <div className="season-wrapper show">
                        {triundData.slice(1).map((item, index) => (
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
                        {anotherdata.map((data, index) => {
                            return (
                                <>
                                    <div className="season-wrapper show" >
                                        <div className="season-card">
                                            <h3> {data.title}</h3>
                                            <p> •  {data.heading}</p>
                                            <p> • {data.heading2}</p>
                                            <p> • {data.heading3}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className="another-data">
                        {footer.map((data, index) => {
                            return (
                                <>
                                    <div className="season-wrapper show" >
                                        <div className="season-card">
                                            <h3> {data.title}</h3>
                                            <p> {data.title}</p>
                                            <p> {data.plan}</p>
                                            <p>  {data.last}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    );
}

export default Triund;
