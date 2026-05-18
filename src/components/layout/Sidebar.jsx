import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>Team Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/bitacora">Bitácora</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;