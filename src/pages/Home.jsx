import members from "../data/members";
import MemberCard from "../components/cards/MemberCard";

function Home() {
    return (
        <section className="dashboard">
            <div className="dashboard-header">
                <h1>Hawkins Devs</h1>
                <p>Proyecto React migrado desde TP1</p>
            </div>

            <div className="members-grid">
                {members.map((member) => (
                    <MemberCard
                        key={member.id}
                        member={member}
                    />
                ))}
            </div>
        </section>
    );
}

export default Home;