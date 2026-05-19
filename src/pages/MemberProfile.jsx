import { useParams } from "react-router-dom";
import members from "../data/members";

function MemberProfile() {
  const { id } = useParams();

  const member = members.find(
    (m) => m.id === id
  );

  return (
    <section className="profile-page">
      <header className="profile-header">
      <h1>{member.name}</h1>

      <p>{member.role}</p>
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
        <section className="profile-quote">
          <h2>Frase favorita</h2>
          <p>{member.quote}</p>
        </section>
      </section>
    </section>
  );
}

export default MemberProfile;