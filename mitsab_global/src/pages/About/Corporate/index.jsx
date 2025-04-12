import {React, useRef} from 'react'
import './Corporate.css'
import { FaHandshake, FaHardHat, FaBalanceScale, FaTrophy } from 'react-icons/fa'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Corporate = () => {
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
    <section id='corporate' ref={container}>
      <div className='container'>
        <div className='column1'>
          <div className='column1-subcontainer'>
            <h3 className='sub-title'> Our Vision </h3>
            <div className='para'>
              <p className='text_muted description'>
                To be the most respectable and sought-after Oil and Gas 
                Contracting company delivering service beyond expectation, 
                in a safe and timely manner.
              </p>
            </div>
          </div>
          <div className='column1-subcontainer'>
            <h3 className='sub-title'> Our Mission </h3>
            <div className='para'>
              <p className='text_muted description'>
                A local Content driven company providing job at its best to 
                one in every home in Nigeria, provide safe working conditions 
                and deliver quality work within a reasonable time-frame.
              </p>
            </div>
          </div>
        </div>
        <div className='column2'>
          <div className='values-container1'>
            <h2 className='sub-title'>Our Core Values</h2>
          </div>
          <div className='values-container2'>
            
              <div className='values'>
                <div className='icon-container'>
                  <FaHandshake />
                </div>
                <h3>Integrity</h3>
              </div>
              <div className='values'>
                <div className='icon-container'>
                  <FaHardHat />
                </div>
                <h3>Safety</h3>
              </div>
            
            
              <div className='values'>
                <div className='icon-container'>
                  <FaBalanceScale />
                </div>
                <h3>Honesty</h3>
              </div>
              <div className='values'>
                <div className='icon-container'>
                  <FaTrophy />
                </div>
                <h3>Result Oriented</h3>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Corporate
