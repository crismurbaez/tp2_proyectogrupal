import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaHouse, FaBook, FaUserGroup, FaImages, FaDatabase, FaCloud, FaCodeBranch, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import members from "../../data/members";
import ThemeToggle from "../ui/ThemeToggle";
import { useTheme } from "../../themes/ThemeContext";

function Sidebar({ sidebarOpen }) {

    const [openMembers, setOpenMembers] = useState(false);
    const { theme } = useTheme();

    return (
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

            <div className="sidebar-header">
                <img src={theme === "upside-down" ? "/img/logo_devs_dark.png" : "/img/logo_devs_light.png"} alt="LogoDevs" className="sidebar-logo" />
                <h2> {theme === "upside-down" ? "Upside Down" : "Hawkins"} </h2>
            </div>

            <nav className="sidebar-nav">

                <Link
                    to="/"
                    className="nav-link"
                >
                    <FaHouse />
                    <span>Home</span>
                </Link>

                <Link
                    to="/bitacora"
                    className="nav-link"
                >
                    <FaBook />
                    <span>Bitácora</span>
                </Link>

                {/* MENU DESPLEGABLE */}

                <div className="nav-dropdown">

                    <button
                        className="nav-link dropdown-btn"
                        onClick={() => setOpenMembers(!openMembers)}
                    >
                        <div className="dropdown-left">
                            <FaUserGroup />
                            <span>Nosotros</span>
                        </div>

                        {openMembers ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                    {openMembers && (
                        <div className="submenu">

                            {members.map((member) => (
                                <Link
                                    key={member.id}
                                    to={`/member/${member.id}`}
                                    className="submenu-link"
                                >
                                    {member.name}
                                </Link>
                            ))}

                        </div>
                    )}

                </div>

                <Link 
                to="/gallery"
                className="nav-link"
                >
                    <FaImages />
                    <span>Galería</span>
                </Link>

                <Link
                    to="/explorer"
                    className="nav-link"
                >
                    <FaDatabase />
                    <span>Explorer (JSON)</span>
                </Link>

                <Link
                    to="/api"
                    className="nav-link"
                >
                    <FaCloud />
                    <span>Explorer API</span>
                </Link>

                <Link
                    to="/render-tree"
                    className="nav-link"
                >
                    <FaCodeBranch />
                    <span>Render Tree</span>
                </Link>

            </nav>

            <div className="sidebar-footer">
                <ThemeToggle />
            </div>

        </aside>
    );
}

export default Sidebar;