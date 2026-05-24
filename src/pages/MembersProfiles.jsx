import { useParams, Link } from "react-router-dom";
import members from "../data/members";
import { useTheme } from "../themes/ThemeContext";

function MembersProfiles() {

  const { id } = useParams();
  const { theme } = useTheme();

  const member = members.find(
    (m) => m.id === id
  );

  if (!member) {
  return (
    <section className="error-page">
      <h2>Integrante no encontrado</h2>
      <p>El perfil que estás buscando no existe.</p>

      <Link to="/">
        Volver al inicio
      </Link>
    </section>
  );
  }

  return (
    <section className={`profile-page ${theme}`}>
      <header className="profile-header">
      <h1>{member.name}</h1>

      <p className="profile-role">{member.role}</p>
      </header>

      <section className="profile-section">
        <h2>Sobre mí</h2>
        <p>{member.desc}</p>
      </section>

      <section className="profile-section">
        <h2>Habilidades</h2>

        <div className="skills-container">
          {member.skills.map((skill, index) => (
            <span key={index}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="profile-section profile-quote">
          <h2>Frase favorita</h2>
          <p>{member.quote}</p>
       </section>

       <div className="profile-footer">
        <Link to="/" className="back-link">
          ← Volver al inicio
        </Link>
       </div>
      
    </section>
  );
}

export default MembersProfiles;