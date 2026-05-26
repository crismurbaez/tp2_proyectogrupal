import React from "react";

function TechStack({ techStack, defaultImg }) {
  if (!techStack || techStack.length === 0) return null;

  return (
    <div className="profile-block">
      <h3>Tech Stack</h3>
      <div className="tech-stack-container">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-item">
            <img
              src={tech.img}
              alt={tech.name}
              className="tech-icon"
              onError={(e) => {
                e.target.src = defaultImg;
              }}
            />
            <div className="tech-details">
              <span className="tech-name">{tech.name}</span>
              <div className="progress-bar-bg">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${tech.level}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
