import { Link } from "react-router-dom";
import { FaHouse, FaBook, FaUserGroup, FaDatabase, FaCloud, FaImages, FaCodeBranch } from "react-icons/fa6";

function Sidebar() {
    return (
        <aside className="sidebar">

            <div className="sidebar-header">
                <h2>Team Dashboard</h2>
            </div>

            <nav className="sidebar-nav">

                <Link 
                to="/" 
                className="nav-link">
                    <FaHouse />
                    <span>Inicio</span>
                </Link>

                <Link 
                to="/explorer" 
                className="nav-link">
                    <FaDatabase />
                    <span>Explorer</span>
                </Link>

                <Link 
                to="/api" 
                className="nav-link">
                    <FaCloud />
                    <span>API</span>
                </Link>

                <Link 
                to="/gallery" 
                className="nav-link">
                    <FaImages />
                    <span>Gallery</span>
                </Link>

                <Link 
                    to="/render-tree" 
                    className="nav-link">
                    <FaCodeBranch />
                    <span>Render Tree</span>
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