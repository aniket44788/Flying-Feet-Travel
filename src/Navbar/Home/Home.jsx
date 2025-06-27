
import "./home.css"

import LocationMap from './Map/LocationMap';
import Customslider from './Slider/Customslider';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import RoamingExperience from './RoamingExperience/RoamingExperience';
import Footer from './Footer/Footer';
import Svgimage from './Svgimage';
import HeroSection from './Blogturn/HeroSection';
import FooterCopy from "../FooterCopy"


function Home() {


  return (
    <>
      <Customslider />
      <Svgimage />
      <WhyChooseUs />
      <HeroSection/>
      <RoamingExperience />
      <LocationMap/>
      <Footer/>
      <FooterCopy/>

    </>
  )
}

export default Home