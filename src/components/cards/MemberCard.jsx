import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa6";

function MemberCard({ member }) {
  return (
    <article className="member-card">

      <div className="member-avatar">
        <img
          src={member.avatar}
          alt={member.name}
        />
      </div>

      <div className="member-info">

        <h2>{member.name}</h2>

        <p>{member.role}</p>

        <div className="member-skills">
          {member.skills.map((skill) => (
            <span key={skill}>
              {skill}
            </span>
          ))}
        </div>

      </div>

      <Link
        to={`/member/${member.id}`}
        className="member-button"
      >
        Ver perfil
        <FaArrowRight />
      </Link>

    </article>
  );
}

export default MemberCard;