import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FaBars, FaXmark } from "react-icons/fa6";

function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="layout">
             {/* HAMBURGER BUTTON */}

            <button
                className="menu-toggle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >

                {sidebarOpen
                    ? <FaXmark />
                    : <FaBars />
                }

            </button>
            
            {/* SIDEBAR */}
            <Sidebar sidebarOpen={sidebarOpen}/>

            <main className="main-content">
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout;