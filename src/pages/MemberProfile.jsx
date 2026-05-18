import { useParams } from "react-router-dom";
import members from "../data/members.json";

function MemberProfile() {
  const { id } = useParams();

  const member = members.find(
    (m) => m.id === id
  );

  return (
    <section>
      <h1>{member.name}</h1>

      <p>{member.role}</p>
    </section>
  );
}

export default MemberProfile;