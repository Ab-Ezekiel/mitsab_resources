import React, { useRef }from 'react'
import "./Teams.css"
import { teams } from "../../../data"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



const Teams = () => {
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
   
    
   
    .fromTo(
      ".container",
      {x:100, opacity:0},
      {opacity:1, stagger:.5, x:0}
    )
   
    
  },{scope:container})

  return (
    <section id='team' ref={container}>
      <div className="container">
    
        <h3 className="sub_title">
          Meet our diverse team of creative minds, developers, 
          and strategists – the driving force behind every project's success.
        </h3>
        <div className="teams_container">
          {
            teams.map((team,index)=>(
              <div className="team_card" key={index}>
                <div className="profile_container">
                  <img src={team.profile} alt={team.name} />
                </div>
                <div className="details">
                  <h3 className="name">{team.name}</h3>
                  <p className="text_muted">{team.title}</p>
                  <div className="social_container">
                    {
                      team.social.map((item,i)=>(
                        <a href={item.url || "#"} target='_blank' className="icon_container" key={i}>
                          {item.icon}
                        </a>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Teams
