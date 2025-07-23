import React, { useRef } from 'react'
import "./About.css"
import { about_image, building_1, building_2, building_3, mgt2, soak_away_pit2, storage_tank_base, welding6 } from "../../assets"
import { FaCheck } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Teams from './Teams'
import Corporate from './Corporate'
import Achievement from './Achievement'
import GetQuote from '../GetQuote'
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
          <img src={mgt2} alt="Mitsab" />
        </div>
        <div className="column">
          <h3 className='title'>
            <span className='g-text'>About Us</span>
          </h3>
          <h3 className='sub_title'>Realizing visions through fundamental focus.</h3>
          <div className="company_media_container">
            <div className="box">
              <img src={storage_tank_base} alt="" />
            </div>
            <div className="box">
              <img src={welding6} alt="" />
            </div>
            <div className="box">
              <img src={soak_away_pit2} alt="" />
            </div>
          </div>
          <div className="para">
            <p className="text_muted description">
              MITSAB RESOURCES GLOBAL LIMITED (MIREGL) is a registered Nigerian company with RC 1667132. Established under the Companies and Allied Matters Act of 1990 on March 11, 2020, 
              MIREGL operates as a multi-disciplinary limited liability company focused on delivering sustainable projects and high-quality services across the construction, exploration, 
              and environmental sectors. Our operations are guided by a strong local content philosophy and a commitment to excellence in service delivery.
            </p>
            <p className="text_muted description">
              As the parent company, MIREGL oversees and manages a growing family of specialized subsidiaries — including T-SAB RESOURCES (focused on oil and gas), MITSAB Security Surveillance, 
              and MITSAB Fire Services — all working collaboratively to extend our technical expertise and broaden our impact across key industries.
            </p>
            <p className="text_muted description">
              Over the years, MIREGL has built a solid reputation for excellence by executing challenging projects and providing innovative design-build solutions, project management services, 
              and related engineering works. Our experienced team of professionals brings deep industry knowledge and a results-driven approach to every engagement.
            </p>
            <p className="text_muted description">
              At MIREGL, our objective is to give every client a seamless and professional project experience. We prioritize clear communication, strategic planning, and precise execution to 
              ensure that our clients' goals remain central to every phase of the project lifecycle.
            </p>
            <p className="text_muted description">
              Through our commitment to sustainable development and technical innovation, we continue to build strong, value-driven relationships while 
              contributing meaningfully to Nigeria’s economic growth.

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
            <NavLink to="project" className="btn">Explore</NavLink>
            <NavLink to="/get-quote" className="btn btn_primary">Get a qoute</NavLink>
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
