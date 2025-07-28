import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./ProjectSlider.css";
import { projects } from "../../../data";
import { Link } from "react-router-dom";

const ProjectSlider = () => {
  const itemsPerSlide = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlidePaused, setAutoSlidePaused] = useState(false);
  const [viewMode, setViewMode] = useState("slide");

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerSlide) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      (prev - itemsPerSlide + projects.length) % projects.length
    );
  };

  const getVisibleProjects = () => {
    const end = currentIndex + itemsPerSlide;
    if (end <= projects.length) {
      return projects.slice(currentIndex, end);
    } else {
      return [
        ...projects.slice(currentIndex),
        ...projects.slice(0, end - projects.length),
      ];
    }
  };

  useEffect(() => {
    if (!autoSlidePaused && viewMode === "slide" && projects.length > 0) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoSlidePaused, viewMode, currentIndex]);

  if (!projects || projects.length === 0) {
    return <div>No projects to display</div>;
  }

  return (
    <div className="project-slider-container">
      <h2 className="sub_title">Innovative construction projects, exceptional craftsmanship.</h2>
      <div className="view-toggle">
        <button
          onClick={() => setViewMode("slide")}
          className={viewMode === "slide" ? "active" : ""}
        >
          Slide View
        </button>
        <button
          onClick={() => setViewMode("grid")}
          className={viewMode === "grid" ? "active" : ""}
        >
          Grid View
        </button>
      </div>

      {viewMode === "slide" ? (
      <>
        <div
          className="slider-container"
          onMouseEnter={() => setAutoSlidePaused(true)}
          onMouseLeave={() => setAutoSlidePaused(false)}
        >
          {getVisibleProjects().map((project, index) => (
            <Link to={`/projects/${project.id}`} className="project-link">
              <motion.div
                key={project.id || index}
                className="project-slide"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {project.image && (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="slider-image"
                    onError={(e) => {
                      e.target.src = "fallback.jpg";
                    }}
                  />
                )}
                <div className="project-info active">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        <div className="slider-controls">
          <button className="prev-button" onClick={handlePrev}>
            Prev
          </button>
          <button className="next-button" onClick={handleNext}>
            Next
          </button>
        </div>
      </>
      ) : (
        <div className="grid-container">
          {projects.map((project, index) => (
            <Link to={`/projects/${project.id}`} className="project-link">
              <div key={project.id || index} className="grid-item">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title || `Project ${index}`}
                    className="grid-image"
                    onError={(e) => {
                      e.target.src = "fallback-image-url.jpg";
                    }}
                  />
                )}
                <div className="project-info">
                  <h3>{project.title}</h3>
                  {project.description && <p>{project.description}</p>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectSlider;
