import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import members from "../data/members";
import { useTheme } from "../themes/ThemeContext";


function MembersProfiles() {
  const { id } = useParams();
  const { theme } = useTheme();
  //Sorpresa animacion
  const [showSurprise, setShowSurprise] = useState(false);
  const [animPhase, setAnimPhase] = useState("IDLE");
  const [targetRect, setTargetRect] = useState(null);
  // Carrusel
  const [currentProject, setCurrentProject] = useState(0);

  const profileInfoRef = useRef(null);

  const member = members.find((m) => m.id === id);
  const profile = member.profiles[theme] || member.profiles["hawkins"];

  if (!member) {
    return (
      <section className="error-page">
        <h2>Integrante no encontrado</h2>
        <p>El perfil que estás buscando no existe.</p>
        <Link to="/">Volver al inicio</Link>
      </section>
    );
  }

  const handleSurpriseClick = () => {
    if (!showSurprise) {
      if (profileInfoRef.current) {
        setTargetRect(profileInfoRef.current.getBoundingClientRect());
      }

      setShowSurprise(true);
      setAnimPhase("SCARE");
      document.body.style.overflow = "hidden";

      setTimeout(() => {
        setAnimPhase("SHRINK");
      }, 800);

      setTimeout(() => {
        setAnimPhase("IDLE");
        document.body.style.overflow = "";
      }, 1600);
    } else {
      setShowSurprise(false);
      setAnimPhase("IDLE");
    }
  };

  //Carrusel
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % member.projects.length);
  };
  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + member.projects.length) % member.projects.length,
    );
  };
  return (
    <main className="profile">
      <div className="profile-card" id="profile-card-id">
        <div className="profile-left">
          <img
            id="profile-img"
            data-profile={member.id}
            src={profile.img}
            alt={`${member.name} profile`}
          />
          <p id="profile-quote" className="quote">
            {profile.quote}
          </p>

          <button
            id="surprise-btn-id"
            className="btn-surprice"
            onClick={handleSurpriseClick}
          >
            {showSurprise ? "Ocultar Sorpresa" : "¡Sorpresa!"}
          </button>

          {/* Redes */}
          {!showSurprise && member.socialMedia && (
            <div className="social-media-container">
              {member.socialMedia.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          )}
        </div>

        {showSurprise ? (
          <div
            className="surprise-container"
            id="surprise-wrapper"
            ref={profileInfoRef}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "400px",
            }}
          >
            <img
              src={member.surprise}
              alt="surprise"
              style={{
                opacity: animPhase === "IDLE" ? 1 : 0,
                maxWidth: "100%",
                maxHeight: "400px",
              }}
            />
          </div>
        ) : (
          <div className="profile-info" ref={profileInfoRef}>
            <h2 id="profile-name">{member.name}</h2>

            <div className="profile-data">
              <p>
                <strong>Ubicación:</strong> {member.location}
              </p>
              <p>
                <strong>Edad:</strong> {member.age} años
              </p>
              <p id="profile-role">
                <strong>Rol:</strong> {profile.role}
              </p>
            </div>

            <div className="profile-block">
              <h3>Perfil</h3>
              <p id="profile-desc">{profile.desc}</p>
            </div>

            <div className="profile-block">
              <h3>Habilidades</h3>
              <ul style={{ margin: 0 }}>
                {profile.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            {/* Tecnologias con progreso e iconos */}
            <div className="profile-block">
              <h3>Tech Stack</h3>
              <div className="tech-stack-container">
                {member.techStack.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="tech-icon"
                      onError={(e) => {
                        e.target.src = profile.img;
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

            {/* CARRUSEL DE PROYECTOS */}
            {member.projects && member.projects.length > 0 && (
              <div className="profile-block">
                <h3>Proyectos</h3>
                <div className="carousel-container">
                  <button className="carousel-btn prev" onClick={prevProject}>
                    &#10094;
                  </button>
                  <div className="carousel-slide">
                    <img
                      src={member.projects[currentProject].img}
                      alt={member.projects[currentProject].title}
                    />
                    <h4>{member.projects[currentProject].title}</h4>
                  </div>
                  <button className="carousel-btn next" onClick={nextProject}>
                    &#10095;
                  </button>
                </div>
              </div>
            )}

            <div className="profile-block">
              <h3>Música Favorita</h3>
              <ul style={{ margin: 0 }}>
                {member.favoriteMusic?.map((band, index) => (
                  <li key={index}>{band}</li>
                ))}
              </ul>
            </div>

            <div className="profile-block">
              <h3>Película Favorita</h3>
              <ul style={{ margin: 0 }}>
                {member.favoriteMovies?.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Sorpresa animacion */}
      {animPhase !== "IDLE" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999999,
            backgroundColor:
              animPhase === "SCARE" ? "rgba(0,0,0,0.95)" : "transparent",
            transition: "background-color 0.8s ease",
            pointerEvents: "none",
          }}
        >
          <img
            src={member.surprise}
            alt="Flying surprise"
            style={{
              position: "absolute",
              objectFit: "contain",
              ...(animPhase === "SCARE"
                ? {
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    transition: "none",
                  }
                : {
                    top: targetRect?.top,
                    left: targetRect?.left,
                    width: targetRect?.width,
                    height: targetRect?.height,
                    transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
                  }),
            }}
          />
        </div>
      )}
    </main>
  );
}

export default MembersProfiles;
