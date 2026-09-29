import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar/Sidebar.jsx";
import Topbar from "../components/layout/Topbar/Topbar";
import { useState } from "react";
import MobileSidebar from "../components/layout/Sidebar/MobileSidebar.jsx";

const AdminLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return(
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar/>
            <MobileSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}/>
            <div className="flex min-w-0 flex-1 flex-col">
                <Topbar onMenuOpen={() => setIsMobileMenuOpen(true)}/>
                <main className="flex-1 p-6">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}; 

export default AdminLayout;