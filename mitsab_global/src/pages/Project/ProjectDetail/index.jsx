"use client"

import { useRef, useEffect } from "react"
import "./ProjectDetail.css"
import { useParams, NavLink, useNavigate } from "react-router-dom"
import { projectsDetail } from "../../../data" // You'll need to define this
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ProjectDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projectsDetail.find((p) => p.id === slug)
  const currentIndex = projectsDetail.findIndex((p) => p.id === slug)
  const nextProject = projectsDetail[(currentIndex + 1) % projectsDetail.length]

  const container = useRef(null)
  const metaRef = useRef(null)

  // Debug the project data
  useEffect(() => {
    console.log("Project data:", project)
  }, [project])

  
  useGSAP(
    () => {
      // Make sure elements exist before animating
      if (!container.current) return

      const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play none none none",
          // Uncomment to debug ScrollTrigger
          // markers: true,
        },
      })

      // Ensure elements exist before adding to timeline
      const elements = {
        title: container.current.querySelector(".project-title"),
        heading: container.current.querySelector(".project-heading"),
        mainImage: container.current.querySelector(".project-main-image"),
        meta: container.current.querySelector(".project-meta"),
        description: container.current.querySelector(".project-description"),
      }

      if (elements.title) timeline.from(elements.title, { y: 50, opacity: 0, duration: 0.6 })
      if (elements.heading) timeline.from(elements.heading, { y: 30, opacity: 0, duration: 0.5 })
      if (elements.mainImage) timeline.from(elements.mainImage, { y: -50, opacity: 0, duration: 0.5 })

      // Explicitly check and animate the meta section
      if (elements.meta) {
        console.log("Meta element found:", elements.meta)
        timeline.from(elements.meta, {
          y: 50,
          opacity: 0,
          duration: 0.5,
          onStart: () => console.log("Meta animation started"),
          onComplete: () => console.log("Meta animation completed"),
        })
      } else {
        console.warn("Meta element not found for animation")
      }

      if (elements.description) timeline.from(elements.description, { y: 50, opacity: 0, duration: 0.6 })
    },
    { scope: container, dependencies: [slug] },
  ) // Add slug as dependency to re-run when project changes

  if (!project) {
    return <div>Project not found.</div>
  }

  return (
    <section id="project-detail" ref={container}>
      <div className="container">
        <h2 className="project-title">{project.name}</h2>

        <div className="project-main-image">
          <img src={project.image || "/placeholder.svg"} alt={project.name} />
        </div>

        {/* Add visibility styles to ensure the element is visible */}
        <div className="project-meta" ref={metaRef} style={{ opacity: 1, visibility: "visible" }}>
          <p>
            <strong>Client:</strong> {project?.client || "No client found"}
          </p>
          <p>
            <strong>Location:</strong> {project?.location || "No location"}
          </p>
          <p>
            <strong>Completion Date:</strong> {project?.completionDate || "No date"}
          </p>
          <p>
            <strong>Category:</strong> {project?.category || "No category"}
          </p>
        </div>

        <div className="project-description">
          <p>{project.description1}</p>
          {project.description2.map((section, index) => (
            <div key={index} className="project-section">
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </div>
          ))}
        </div>

        {project.gallery?.length > 0 && (
          <div className="project-gallery">
            {project.gallery.map((img, index) => (
              <div key={index} className="gallery-item">
                <img src={img || "/placeholder.svg"} alt={`Project ${index + 1}`} />
              </div>
            ))}
          </div>
        )}

        <div className="project-description">
          {project.description3.map((section, index) => (
            <div key={index} className="project-section">
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </div>
          ))}
        </div>

        <section className="call-to-action">
          <h2 className="sub_title">Inspired by this project?</h2>
          <p>{project.contactMessage || "Let's help bring your vision to life with precision and excellence."}</p>
          <div className="buttons_container">
            <button className="btn" onClick={() => navigate(`/projects/${nextProject.id}`)}>
              View Next Project
            </button>
            <NavLink to="/contact" className="btn btn_primary">
              Get in Touch
            </NavLink>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ProjectDetail
