import React, { useState } from 'react'
import { FcGlobe } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import { FcSportsMode } from "react-icons/fc";

import { FcBullish } from "react-icons/fc";
import svg from "../Home/svg.png"
import "./home.css"

import LocationMap from './Map/LocationMap';
import Customslider from './Slider/Customslider';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import RoamingExperience from './RoamingExperience/RoamingExperience';
import Footer from './Footer/Footer';


function Home() {

 
  return (
    <>

      <Customslider />

    <div className="svg-self">
      <img src={svg} alt="" width={"100%"}/>
    </div>
  

      <WhyChooseUs />
      <RoamingExperience />
      <LocationMap />
      <Footer />

    </>
  )
}

export default Home