import React, {useRef} from "react";
import './ServiceDetail.css';
import { useParams } from "react-router-dom";
import { servicesDetail } from "../../../data"; // Ensure you're importing the correct dataset
import Testimonies from "../../Header/Testimonies";
import { Link } from "react-router-dom";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
  const { id } = useParams(); // Get the ID from the route
  const service = servicesDetail.find((service) => service.id == id); // Find the matching serviceDetail

  if (!service) {
    return <div>Service not found.</div>; // Handle invalid ID gracefully
  }

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
    <section id="service-detail" ref={container}>
      <div className="container">
      <h2 className="title">{service.name}</h2>
      <div className="sub-service-detail">
        <div className="service-detail-info">
          <h3 className="detail-heading">{service.detailsHeading}</h3>
          
          <div className="additional-info">
           
            <div className="additional-info-text">
              <p><strong>{service.detailsInfo1} </strong></p>
              <p>{service.additionaldetailsInfo1}</p>
            </div>
            <div className="additional-info-text">
              <p><strong>{service.detailsInfo2} </strong></p>
              <p>{service.additionaldetailsInfo2}</p>
            </div>
            <div className="additional-info-text">
              <p><strong>{service.detailsInfo3} </strong></p>
              <p>{service.additionaldetailsInfo3}</p>
            </div>
            <div className="additional-info-text">
              <p><strong>{service.detailsInfo4} </strong></p>
              <p>{service.additionaldetailsInfo4}</p>
            </div>
            <div className="additional-info-text">
              <p><strong>{service.detailsInfo5} </strong></p>
              <p>{service.additionaldetailsInfo5}</p>
            </div>
            <div className="additional-info-text">
              <p><strong>{service.detailsInfo6} </strong></p>
              <p>{service.additionaldetailsInfo6}</p>
            </div>
            <div className="additional-info-text">
              <p><strong>{service.detailsInfo7} </strong></p>
              <p>{service.additionaldetailsInfo7}</p>
            </div>
          </div>
        </div>
        <div className="image-service-detail">
          <img src={service.detailImage} alt={service.name} />
        </div>
        
      </div>
      {/* Testimonies */}
      <Testimonies/>
      {/* Call to Action */}
      <section className="call-to-action">
        <h2 className="sub_title">Get a Free Consultation</h2>
        <p>{service.contactMessage}</p>
        <div className="buttons_container">
          <Link to="project" smooth={true} className="btn">Explore More</Link>
          <Link to="contact" smooth={true} className="btn btn_primary">Get a qoute</Link>
        </div>
        
      </section>
      </div>
    </section>
  );
};

export default ServiceDetail;
