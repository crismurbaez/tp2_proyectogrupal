import React, { useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import members from "../data/members";
import { useTheme } from "../themes/ThemeContext";
import ProjectsCarousel from "../components/profile/ProjectsCarousel";
import TechStack from "../components/profile/TechStack";
import ProfileList from "../components/profile/ProfileList";
import SocialMedia from "../components/profile/SocialMedia";
import SurpriseAnimation from "../components/profile/SurpriseAnimation";

function MembersProfiles() {
  const { id } = useParams();
  const { theme } = useTheme();
  const profileInfoRef = useRef(null);

  {/* Sorpresa */}
  const [showSurprise, setShowSurprise] = useState(false);
  const [animPhase, setAnimPhase] = useState("IDLE");
  const [targetRect, setTargetRect] = useState(null);

  const member = members.find((m) => m.id === id);
  const profile = member?.profiles[theme] || member?.profiles["hawkins"];

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

          {!showSurprise && <SocialMedia socialMedia={member.socialMedia} />}
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

            <ProfileList title="Habilidades" items={profile.skills} />
            {/* Tecnologias con progreso e iconos */}
            <TechStack techStack={member.techStack} defaultImg={profile.img} />
            {/* Carrusel */}
            <ProjectsCarousel projects={member.projects} />
            {/* musica */}
            <ProfileList title="Música Favorita" items={member.favoriteMusic} />
            {/* peliculas */}
            <ProfileList
              title="Película Favorita"
              items={member.favoriteMovies}
            />
          </div>
        )}
      </div>

      {/* sorpresa animacion */}
      <SurpriseAnimation
        animPhase={animPhase}
        targetRect={targetRect}
        surpriseImg={member.surprise}
      />
    </main>
  );
}

export default MembersProfiles;
