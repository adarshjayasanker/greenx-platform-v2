import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar/Sidebar";
import Topbar from "../components/layout/Topbar/Topbar";

const AdminLayout = () => {
    return(
        <div className="min-h-screen flex">
            <Sidebar/>
            <div className="flex-1 flex flex-col">
                <Topbar/>
                <main className="flex-1 p-6">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}; 

export default AdminLayout;