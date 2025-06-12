import React, { useState } from 'react'
import { FcGlobe } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";

import { FcBullish } from "react-icons/fc";

import "./home.css"
import triundtreak from "../Home/Tour Images/dining.jpg"
import dhramshalatour from "../Home/Tour Images/pot.jpg"
import Kherrgangatreak from "../Home/Tour Images/restaurent.jpg"
import LocationMap from './Map/LocationMap';
import Customslider from './Slider/Customslider';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import RoamingExperience from './RoamingExperience/RoamingExperience';
import Footer from './Footer/Footer';


function Home() {

  const tourData = [{
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
  }
  ];

  const iconsData = [{
    icon: <FcBullish />,
    title: " 5 YEARS EXPERIENCE "
  }, {
    icon: <FcBullish />
    ,
    title: " LOTS OF GEARS "
  }, {
    icon: <FcBullish />
    ,
    title: " COMPLICATED MAP"
  }, {
    icon: <FcBullish />
    ,
    title: " PACKING ADVICE "
  }, {
    icon: <FcBullish />
    ,
    title: " PACKING ADVICE "
  }

  ]
  return (
    <>

      <Customslider />


      <br />
      <div className="main-heading">
        <h1>OUR POPULAR TOURS </h1>
      </div>

      <div className="main-content">
        {/* <div className="heading"> OUR TOURS</div> */}
        <div className="main-tours">
          {tourData.map((data, index) => {
            return (
              <>
                <div className="tour-Data-map">
                  <img className="tour-img" src={data.image} alt="" />
                  <h5>  <FcGlobe />  {data.title}</h5>
                  <h5> <FcAlarmClock /> {data.time}</h5>
                  <h5> <FcSportsMode /> {data.location}</h5>
                  <h2> {data.price}</h2>
                </div>
              </>
            )
          })}
        </div>
      </div>

      <WhyChooseUs />
      <RoamingExperience />
      <LocationMap />
      <Footer />




    </>
  )
}

export default Home