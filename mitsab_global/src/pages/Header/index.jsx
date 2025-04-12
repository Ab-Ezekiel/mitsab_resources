import React, { useRef } from 'react';
import './Header.css';
import { logo, home_image1, welder_Work,home_image2, home_image3, home_image4, home_image5, home_image6 } from '../../assets';
import { Link } from 'react-scroll';
import Achievement from './Achievement';
import Testimonies from './Testimonies';
import Services from '../Services';
import Blog from './Blog'
import Project from '../Project';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import Typewriter from './TypeWriter';
import Slider from './Slider';


const Header = () => {
  const container = useRef(null);
  const sliderImages = [home_image2, home_image5, home_image6]; 

  useGSAP(()=>{
    const timeline = gsap.timeline({delay:1, stagger:1});
    timeline
    .fromTo(
      ".image_container",
      {scale:.5, opacity:0, y:150},
      {scale:1, ease:'sine.in', opacity:1, y:0}
    )
    .from(
      ".typewriter-wrapper",
      {opacity:0, y:-30}
    )
    .from(
      ".description",
      {opacity:0, y:-30}
    )
    .from(
      ".buttons_container",
      {opacity:0, y:40}
    )
  })
  return (
    <header id="header" ref={container}>
      <div className="container full_height">
        <Slider images={sliderImages} className="custom-slider" />
        <div className="row">
          {/* Left Column - Text */}
          <div className="column">
            
            <Typewriter className="typewriter-wrapper"/>
            
            <p className="text_muted description">
              We are dedicated to turning your visions into tangible masterpieces. 
              With years of experience and a team of skilled professionals, 
              we specialize in delivering high-quality construction services tailored 
              to meet the unique needs of each client.
            </p>
            <div className="buttons_container">
              <Link to="services" smooth={true} className="btn">
                Our Services
              </Link>
              <Link to="contact" smooth={true} className="btn btn_primary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="column">
            <div className="image_container">
              <img src={logo} alt="Hero" />
            </div>
          </div>
        </div>
        <Achievement/>
        <Services/>
        <Slider/>
      </div>
      
    </header>
  );
};

export default Header;