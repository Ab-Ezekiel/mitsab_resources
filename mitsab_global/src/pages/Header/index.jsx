import React, { useRef } from 'react';
import './Header.css';
import { logo,storage_tank_base, home_image1, welder_Work,home_image2, home_image3, home_image4, home_image5, home_image6 } from '../../assets';
import { Link } from 'react-scroll';
import { NavLink } from "react-router-dom";
import Achievement from './Achievement';
import Testimonies from './Testimonies';
import Services from '../Services';
import Contact from '../Contact';
import Blog from './Blog'
import Project from './Project';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import Typewriter from './TypeWriter';
import BackgroundSlider from './BackgroundSlider';
import ProjectSlider from './ProjectSlider';



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
        <BackgroundSlider images={sliderImages} className="custom-slider" />
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
              <NavLink to="contact"  className="btn btn_primary">
                Contact Us
              </NavLink>
              <NavLink to="contact"  className="btn btn_primary">
                Explore Our Subsidiaries
              </NavLink>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="column">
      
            <div className="image_container">
              <img src={logo} alt="Hero" />
            </div>
          </div>
        </div>
        
      </div>
      <Achievement/>
      <Services/>
      <ProjectSlider/>
      <Blog/>
      <Testimonies/>
    </header>
  );
};

export default Header;


     