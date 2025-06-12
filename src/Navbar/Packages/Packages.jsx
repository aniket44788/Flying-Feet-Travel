import React from 'react'
import "./packages.css"
import { FcGlobe } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";
import triundtreak from "../../Navbar/Packages/Packages Images/dining.jpg"
import dhramshalatour from "../../Navbar/Packages/Packages Images/dining.jpg"
import   Kherrgangatreak from "../../Navbar/Packages/Packages Images/dining.jpg"
import Footer from '../Home/Footer/Footer';

function Packages() {

  const tourData = [
  
  {
    image: dhramshalatour,
    title: "DHARAMSHALA TOUR",
    time: "On Weekend Days",
    location: "Dharamshala",
    price: "null"
  },
  {
    image: Kherrgangatreak,
    title: "KHEERGANGA TREAK",
    time: "2 Days / 1 Nights",
    location: "Barshani",
    price: "999/-"
  },
  {
    image: Kherrgangatreak,
    title: "KHEERGANGA TREAK",
    time: "2 Days / 1 Nights",
    location: "Barshani",
    price: "999/-"
  },
  {
    image: triundtreak,
    title: "TRIUND TREAK",
    time: "2 Days / 1 Nights",
    location: "Bhagsu",
    price: "999/-"
  },
  {
    image: dhramshalatour,
    title: "DHARAMSHALA TOUR",
    time: "On Weekend Days",
    location: "Dharamshala",
    price: "null"
  },
  {
    image: Kherrgangatreak,
    title: "KHEERGANGA TREAK",
    time: "2 Days / 1 Nights",
    location: "Barshani",
    price: "999/-"
  },
  {
    image: Kherrgangatreak,
    title: "KHEERGANGA TREAK",
    time: "2 Days / 1 Nights",
    location: "Barshani",
    price: "999/-"
  }
  ];
  return (
    <>
      <div className="tours-section">
      <div className="tours-heading">
        <h1>OUR POPULAR TOURS</h1>
      </div>

      <div className="tours-wrapper">
        <div className="tours-grid">
          {tourData.map((data, index) => (
            <div className="tour-card" key={index}>
              <img className="tour-image" src={data.image} alt={data.title} />
              <h5><FcGlobe /> {data.title}</h5>
              <h5><FcAlarmClock /> {data.time}</h5>
              <h5><FcSportsMode /> {data.location}</h5>
              <h2>{data.price}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Packages