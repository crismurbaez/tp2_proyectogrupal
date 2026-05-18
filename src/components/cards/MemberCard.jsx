import { Link } from "react-router-dom";

function MemberCard({ member }) {
  return (
    <article className="member-card">
      <img src={member.avatar} alt={member.name} />

      <h2>{member.name}</h2>

      <p>{member.role}</p>

      <Link to={`/member/${member.id}`}>
        Ver perfil
      </Link>
    </article>
  );
}

export default MemberCard;