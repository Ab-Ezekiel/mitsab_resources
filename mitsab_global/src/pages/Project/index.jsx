import React, {useRef } from 'react';
import "./Project.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "../../data";
import { slugify } from '../../utils/slugify';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Blog from '../Header/Blog';
gsap.registerPlugin(ScrollTrigger);


const Project = () => {
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
      "h1 .title",
      {y:-50, opacity:0}
    )
    .from(
      ".sub_title",
      {y:-50, opacity:0}
    )
    .from(
      ".slick-slider",
      {y:-50, opacity:0}
    )
    
    
  },{scope:container})

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px", // Ensure this is a string
        },
      },
    ],
  };

  return (
    <section id="project" ref={container}>
      <div className="project_top">
        <h1 className="sub_title">Our <span className="g-text">Projects</span></h1>
        <h3 className="sub_title">
          Innovative construction projects, exceptional craftsmanship.
        </h3>
      </div>
      <Slider {...settings} className="projects_container">
        {projects.map((project, index) => (
          <div key={index} className="project_slide">
            <div className="image_container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="box">
              <h1 className="name">{project.title}</h1>
            </div>
            <div className="details">
              <h3 className="name">{project.title}</h3>
              <p className="text_muted description">{project.description}</p>
              <Link to={`/projects/${slugify(project.title)}`} className="btn btn_primary">
                View Detail
              </Link>
            </div>
          </div>
        ))}
      </Slider>
      <Blog/>
    </section>
  );
};

export default Project;
