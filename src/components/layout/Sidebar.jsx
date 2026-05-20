import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHouse,FaBook,FaUserGroup,FaDatabase,FaCloud,FaCodeBranch,FaChevronDown,FaChevronUp } from "react-icons/fa6";
import members from "../../data/members";

function Sidebar() {

    const [openMembers, setOpenMembers] = useState(false);

    return (
        <aside className="sidebar">

            <div className="sidebar-header">
                <h2>Hawkins Devs</h2>
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

        </aside>
    );
}

export default Sidebar;