import { Link } from "react-router-dom";

import {
    FaHouse,
    FaBook,
    FaUserGroup
} from "react-icons/fa6";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-header">
                <h2>Team Dashboard</h2>
            </div>

            <nav className="sidebar-nav">

                <Link to="/" className="nav-link">
                    <FaHouse />
                    <span>Inicio</span>
                </Link>

                <Link
                    to="/bitacora"
                    className="nav-link"
                >
                    <FaBook />
                    <span>Bitácora</span>
                </Link>

            </nav>

        </aside>
    );
}

export default Sidebar;