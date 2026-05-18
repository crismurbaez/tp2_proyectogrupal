import profiles from "../data/members.json";
import MemberCard from "../components/cards/MemberCard";

function Home() {
    return (
        <section>
            <h1>Home Dashboard</h1>

            <div className="members-grid">
                {profiles.map((member) => (
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