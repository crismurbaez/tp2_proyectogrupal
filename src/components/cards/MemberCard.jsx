import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useTheme } from "../../themes/ThemeContext";

function MemberCard({ member }) {

  const { theme } = useTheme();

  const profile =
    member.profiles[theme];

  return (

    <article className="member-card">

      <div className="member-avatar">

        <img
          src={profile.img}
          alt={member.name}
        />

      </div>

      <div className="member-info">

        <h2>{member.name}</h2>

        <p className="member-role">
          {profile.role}
        </p>

        <div className="member-skills">

          {profile.skills.map((skill) => (

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