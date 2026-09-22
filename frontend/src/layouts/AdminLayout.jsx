import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar/Sidebar.jsx";
import Topbar from "../components/layout/Topbar/Topbar";

const AdminLayout = () => {
    return(
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar/>
            <div className="flex min-w-0 flex-1 flex-col">
                <Topbar/>
                <main className="flex-1 p-6">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}; 

export default AdminLayout;