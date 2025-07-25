import React, { useRef } from 'react'
import "./Services.css"
import { services,servicesDetail } from "../../data"
import ServiceCard from './ServiceCard'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Services = () => {
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
      ".services_top",
      {y:-50, opacity:0}
    )
    .fromTo(
      ".service_card",
      {y:100, opacity:0},
      {opacity:1, stagger:.5, y:0}
    )
   
    
  },{scope:container})

  return (
    <section id='services'ref={container}>
      <div className="container">
        <div className="services_top">
          <h3 className="title">Our <span className="g-text">Services</span></h3>
          <h3 className="sub_title">We specialize in strategic construction innovation.</h3>
        </div>
        <div className="services_container">
          {services.map((service) => (
            <Link key={service.id} to={`/services/${service.detailId}`}>
              <ServiceCard
                icon={service.icon}
                name={service.name}
                description={service.description}
              />
            </Link>
            )
          )}

        </div>
      </div>
    </section>
  )
}

export default Services
