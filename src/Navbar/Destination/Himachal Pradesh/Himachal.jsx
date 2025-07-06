import React from 'react';
import './himachal.css';
import Triund from "../Himachal Pradesh/triund.jpg";

const destinations = [
  {
    title: "Shimla",
    location: "Capital of Himachal Pradesh",
    bestTime: "March to June, December to February (snowfall)",
    highlights: "Mall Road, The Ridge, Jakhoo Temple, Toy Train, Kufri",
    description: "Shimla, once the summer capital of British India, is famous for its colonial architecture, scenic vistas, and snow-covered hills in winter. It’s a favorite honeymoon and family holiday spot.",
    image: Triund
  },
  {
    title: "Manali",
    location: "Kullu District",
    bestTime: "October to June",
    highlights: "Solang Valley, Rohtang Pass, Hidimba Temple, Paragliding, River Rafting",
    description: "Manali is a high-altitude Himalayan town known for adventure sports, snow activities, and as a gateway to Leh, Spiti and Lahaul valleys. It attracts couples, trekkers, and backpackers.",
    image: Triund
  },
  {
    title: "Dharamshala",
    location: "Kangra District",
    bestTime: "March to June, September to November",
    highlights: "Dalai Lama Temple, Bhagsunag Falls, Triund Trek, Cricket Stadium",
    description: "Dharamshala is the spiritual center of Tibetan Buddhism in India and home to the Dalai Lama. Nestled in the Dhauladhar range, it's perfect for spiritual and nature retreats.",
    image: Triund
  },
  {
    title: "Kasol",
    location: "Parvati Valley, Kullu",
    bestTime: "March to June, October to November",
    highlights: "Trekking, Cafes, Music Festivals, Chalal, Kheerganga Trek",
    description: "Kasol is a peaceful village along the Parvati River and is a haven for backpackers and trekkers. Its Israeli cafés, scenic trails, and chill vibe make it popular with youth.",
    image: Triund
  },
  {
    title: "Spiti Valley",
    location: "Lahaul and Spiti",
    bestTime: "May to October",
    highlights: "Ki Monastery, Chandratal Lake, Hikkim, Langza, Fossils",
    description: "Spiti is a cold desert valley with moon-like landscapes, ancient monasteries, and remote Himalayan villages. It's ideal for solitude and rugged adventure.",
    image: Triund
  },
  {
    title: "Dalhousie",
    location: "Chamba District",
    bestTime: "March to June, December to February (snowfall)",
    highlights: "Khajjiar, Dainkund Peak, Kalatop Wildlife Sanctuary",
    description: "Dalhousie is a serene hill station with pine forests, colonial-era buildings, and pleasant weather. It offers a quiet retreat and nature walks.",
    image:  Triund
  },
  {
    title: "Kasauli",
    location: "Solan District",
    bestTime: "April to June, September to November",
    highlights: "Christ Church, Gilbert Trail, Monkey Point",
    description: "Kasauli is a small, peaceful cantonment town with British colonial architecture, perfect for weekend getaways and slow travel.",
    image: Triund
  },
  {
    title: "Chail",
    location: "Near Shimla",
    bestTime: "March to June, September to November",
    highlights: "World’s highest cricket ground, Chail Palace, Wildlife Sanctuary",
    description: "Chail offers a peaceful alternative to Shimla with dense deodar forests, royal palaces, and mountain views.",
    image: Triund
  },
  {
    title: "Tirthan Valley",
    location: "Great Himalayan National Park",
    bestTime: "March to June, September to November",
    highlights: "Fishing, Hiking, Hidden Waterfalls, Eco-tourism",
    description: "Tirthan Valley is an offbeat gem for nature lovers, with trout-filled rivers, lush forests, and tranquil homestays.",
    image:  Triund
  },
  {
    title: "Kinnaur",
    location: "Bordering Tibet",
    bestTime: "April to October",
    highlights: "Sangla Valley, Kalpa, Apple Orchards, Kinnaur Kailash",
    description: "Kinnaur is known for its rich blend of Hindu and Buddhist culture, scenic valleys, and majestic Kinnaur Kailash range.",
    image: Triund
  },
  {
    title: "Bir Billing",
    location: "Kangra District",
    bestTime: "March to May, October to November",
    highlights: "Paragliding, Monasteries, Cafes, Trekking",
    description: "Bir Billing is the paragliding capital of India, attracting adventure seekers and spiritual travelers alike.",
    image: Triund
  },
  {
    title: "Narkanda",
    location: "Near Shimla",
    bestTime: "December to February (snowfall), April to June",
    highlights: "Skiing, Hatu Peak, Apple Orchards",
    description: "A small town known for apple orchards and snow sports, Narkanda is a great winter destination with calm Himalayan beauty.",
    image: Triund
  },
  {
    title: "Palampur",
    location: "Kangra Valley",
    bestTime: "April to June, September to November",
    highlights: "Tea Gardens, Monasteries, Neugal Khad, Art Gallery",
    description: "Palampur is known for its lush tea gardens and colonial architecture, offering peaceful vibes and cultural depth.",
    image: Triund
  },
  {
    title: "Khajjiar",
    location: "Near Dalhousie",
    bestTime: "March to June",
    highlights: "Mini Switzerland of India, Horse riding, Khajjiar Lake",
    description: "A scenic meadow surrounded by forests, Khajjiar is ideal for a relaxed outing and family picnics.",
    image: Triund
  },
  {
    title: "Hampta Pass",
    location: "Between Kullu & Spiti",
    bestTime: "June to September",
    highlights: "Trekking, Snow bridges, Camping",
    description: "Hampta Pass trek offers dramatic changes in terrain—from green Kullu valley to barren Spiti. Ideal for first-time trekkers.",
    image: Triund
  }
];

const Himachal = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Top Himachal Pradesh Destinations</h1>
      <div style={styles.grid}>
        {destinations.map((place, index) => (
          <div key={index} style={styles.card}>
            <img src={place.image} alt={place.title} style={styles.image} />
            <h2 style={styles.title}>{place.title}</h2>
            <p><strong>Location:</strong> {place.location}</p>
            <p><strong>Best Time:</strong> {place.bestTime}</p>
            <p><strong>Highlights:</strong> {place.highlights}</p>
            <p style={styles.description}>{place.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px",
    fontFamily: "sans-serif",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "30px",
    color: "#2c3e50",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
    gap: "24px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
    padding: "20px",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "12px",
  },
  title: {
    fontSize: "22px",
    color: "#0066cc",
    marginBottom: "8px",
  },
  description: {
    marginTop: "10px",
    fontSize: "15px",
    color: "#444",
  }
};


export default Himachal;

