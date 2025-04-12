import React, { useRef } from 'react'
import "./About.css"
import { about_image, building_1, building_2, building_3 } from "../../assets"
import { FaCheck } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Teams from './Teams'
import Corporate from './Corporate'
import Achievement from './Achievement'
gsap.registerPlugin(ScrollTrigger);



const About = () => {

  const container = useRef(null) 
  useGSAP(()=>{
    const timeline = gsap.timeline({
      delay:.5,
      scrollTrigger:{
        trigger:container.current,
        start:"20% bottom",
        end:"bottom top",
      },
    });
    timeline
    .from(
      ".company_photo",
      {x:-50, opacity:0}
    )
    .from(
      ".g-text",
      {y:50, opacity:0}
    )
    .from(
      ".sub_title",
      {y:50, opacity:0}
    )
    .from(
      ".box",
      {x:50, opacity:0, stagger:.5}
    )
    .from(
      ".para ",
      {y:50, opacity:0}
    )
    .from(
      ".group",
      {y:50, opacity:0}
    )
    .from(
      ".buttons_container",
      {y:50, opacity:0}
    )
  },{scope:container})

  return (
    <section id='about' ref={container}>
      <div className="container about-container">
        <div className="column company_photo">
          <img src={about_image} alt="Mitsab" />
        </div>
        <div className="column">
          <h3 className='title'>
            <span className='g-text'>About Us</span>
          </h3>
          <h3 className='sub_title'>Realizing visions through fundamental focus.</h3>
          <div className="company_media_container">
            <div className="box">
              <img src={building_1} alt="" />
            </div>
            <div className="box">
              <img src={building_2} alt="" />
            </div>
            <div className="box">
              <img src={building_3} alt="" />
            </div>
          </div>
          <div className="para">
            <p className="text_muted description">
              The objective of MIREGL is to provide our clients with a more assured at it best experience when we are chosen and given the opportunity to execute any of their projects. 
              Our emphasis is on clear communication and follow-through procedures to ensures that client’s objectives are top priority in the planning and execution of all our processes.

              As expected, we have built successful business relationship through sustainable projects and services that has contributed to the growth of the Nigerian economy.
            </p>
            <p className="text_muted description">
              As expected, we have built successful business relationship through sustainable projects and services that has contributed to the growth of the Nigerian economy.
            </p>
          </div>
          <div className="group" >
            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Consultation</p>
                <h3>Free</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Expert</p>
                <h3>Engineers</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Customer</p>
                <h3>Support</h3>
              </div>
            </div>

            <div className="row">
              <div className="icon_container">
                <FaCheck/>
              </div>
              <div className="details">
                <p className="text_muted">Quality</p>
                <h3>Service</h3>
              </div>
            </div>
          </div>
          <div className="buttons_container">
            <Link to="project" smooth={true} className="btn">Explore</Link>
            <Link to="contact" smooth={true} className="btn btn_primary">Get a qoute</Link>
          </div>
        </div>
        
      </div>
      <Corporate/>
      <Teams/>
      <Achievement/>
      
    </section>
    
  )
}

export default About
