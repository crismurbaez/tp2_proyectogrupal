import React, { useState } from "react";

function ProjectsCarousel({ projects }) {
  const [currentProject, setCurrentProject] = useState(0);

  if (!projects || projects.length === 0) return null;

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="profile-block">
      <h3>Proyectos</h3>
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevProject}>
          &#10094;
        </button>
        <div className="carousel-slide">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
          />
          <h4>{projects[currentProject].title}</h4>
        </div>
        <button className="carousel-btn next" onClick={nextProject}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default ProjectsCarousel;
