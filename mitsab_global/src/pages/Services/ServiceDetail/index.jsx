import React, { useRef } from "react";
import './ServiceDetail.css';
import { useParams, Link, NavLink, useNavigate } from "react-router-dom";
import { servicesDetail } from "../../../data";
import Testimonies from "../../Header/Testimonies";
import gsap from 'gsap';
import GetQuote from "../../GetQuote";
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesDetail.find(s => s.id === slug);
  const currentIndex = servicesDetail.findIndex(s => s.id === slug);
  const nextService = servicesDetail[(currentIndex + 1) % servicesDetail.length]; // loops to first if at end

  const container = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
        end: "bottom top",
      },
    });
    timeline
      .from(".detail-heading", { y: 50, opacity: 0 })
      .from(".additional-info", { y: 100, opacity: 0 })
      .from(".image-service-detail", { y: -50, opacity: 1 });
  }, { scope: container });

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <section id="service-detail" ref={container}>
      <div className="container">
        <h2 className="title">{service.name}</h2>
        <h4 className="detail-head">{service.detailsHeading}</h4>
       
          
          
          <div className="image-service-detail">
            {service.detailImage.endsWith(".mp4") ? (
              <video 
                src={service.detailImage}
                controls
                autoPlay
                muted
                loop
                style={{ width: "70%", borderRadius: "12px" }}
              />
            ) : (
              <img src={service.detailImage} alt={service.name} />
            )}
          </div>

          <div className="service-detail-info">
            

            <div className="additional-info">
              <div className="additional-info-text">
                <h4>Introduction to Our Construction Services</h4>
                <p>{service.detailsDescription1}</p>
              </div>

              <div className="additional-info-text">
                <h4>Versatile Capabilities & Expertise</h4>
                <p>{service.detailsDescription2}</p>
              </div>
              {/* IMAGE GRID START */}
                <div className="image-grid">
                  {service.moreDetailImages.map((img, index) => (
                    <div key={index} className="image-grid-item">
                      <img src={img} alt={`Detail ${index + 1}`} />
                    </div>
                  ))}
                </div>
              {/* IMAGE GRID END */}
              <div className="additional-info-text">
                <h4>Commitment to Innovation & Quality</h4>
                <p>{service.detailsDescription3}</p>
              </div>

              <div className="additional-info-text">
                <h4>Partner with Us</h4>
                <p>{service.detailsDescription4}</p>
              </div>
            </div>
          
        </div>

        <Testimonies />

        <section className="call-to-action">
          <h2 className="sub_title">Get a Free Consultation</h2>
          <p>{service.contactMessage}</p>
          <div className="buttons_container">
            <button className="btn" onClick={() => navigate(`/services/${nextService.id}`)}>
              Explore More
            </button>
            <NavLink to="/get-quote" className="btn btn_primary">Get a Quote</NavLink>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServiceDetail;
