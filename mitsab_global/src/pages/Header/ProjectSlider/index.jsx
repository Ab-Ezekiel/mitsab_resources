
import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { projects } from "../../../data.jsx"
import "./ProjectSlider.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const ProjectSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5])
  const [autoSlidePaused, setAutoSlidePaused] = useState(false)
  const container = useRef(null)

  // GSAP animations using useGSAP
  useGSAP(
    () => {
      const timeline = gsap.timeline({
        delay: 0.2,
        scrollTrigger: {
          trigger: container.current,
          start: "20% bottom",
          end: "bottom top",
          // Uncomment to see the trigger boundaries during development
          // markers: true,
        },
      })

      timeline
        .from(".slider-title", {
          y: 50,
          opacity: 0,
          duration: 0.8,
        })
        .from(".slider-subtitle", {
          y: 30,
          opacity: 0,
          duration: 0.6,
        })
        .from(".project-slide", {
          scale: 0.8,
          opacity: 0,
          stagger: 0.15,
          duration: 0.5,
        })
        .from(".slider-controls", {
          y: -30,
          opacity: 0,
          duration: 0.5,
        })
    },
    { scope: container },
  )

  const handleNext = () => {
    // Temporarily pause auto-sliding
    setAutoSlidePaused(true)

    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % projects.length)
      return updatedIndexes
    })

    // Resume auto-sliding after 10 seconds of inactivity
    setTimeout(() => setAutoSlidePaused(false), 10000)
  }

  const handlePrev = () => {
    // Temporarily pause auto-sliding
    setAutoSlidePaused(true)

    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
      return updatedIndexes
    })

    // Resume auto-sliding after 10 seconds of inactivity
    setTimeout(() => setAutoSlidePaused(false), 10000)
  }

  useEffect(() => {
    // Only set up interval if auto-slide is not paused
    if (!autoSlidePaused) {
      const interval = setInterval(() => {
        handleNext()
      }, 5000) // 5 seconds

      // Clear the interval when component unmounts or when paused
      return () => clearInterval(interval)
    }
  }, [autoSlidePaused])

  const positions = ["center", "left1", "left", "right", "right1", "hidden"]
  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2, opacity: 0.8 },
    left: { x: "-90%", scale: 0.5, zIndex: 1, opacity: 0.6 },
    right: { x: "90%", scale: 0.5, zIndex: 1, opacity: 0.6 },
    right1: { x: "50%", scale: 0.7, zIndex: 2, opacity: 0.8 },
    hidden: { x: "0%", scale: 0, zIndex: 0, opacity: 0 },
  }

  return (
    <section id="projects" ref={container}>
      <div className="project-container">
        <h2 className="slider-title">Our Featured Projects</h2>
        <p className="slider-subtitle">Explore our portfolio of successful construction projects</p>

        <div
          className="slider-container"
          onMouseEnter={() => setAutoSlidePaused(true)}
          onMouseLeave={() => setAutoSlidePaused(false)}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-slide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={positions[positionIndexes.indexOf(index)]}
              variants={imageVariants}
              transition={{ duration: 0.8 }}
            >
              <motion.img src={project.image} alt={project.title} className="slider-image" />
              <div className={`project-info ${positions[positionIndexes.indexOf(index)] === "center" ? "active" : ""}`}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="slider-controls">
            <button className="prev-button" onClick={handlePrev}>
              Prev
            </button>
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSlider
