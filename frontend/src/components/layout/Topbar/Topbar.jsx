import { useNavigate } from "react-router-dom";
import useAuth from "../../../features/auth/components/useAuth";

const Topbar = () => {
    const {admin, logout} = useAuth();
    const navigate = useNavigate();
    const handleLogout = async() => {
        await logout();
        navigate('/greenx-admin/login', {
            replace: true,
        });
    };
    return(
        <header className="flex min-h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
            <div>
                <p className="text-sm font-medium text-gray-900">Greenx Administration</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{admin?.name || "Administrator"}</p>
                    <p className="text-xs text-gray-500">{admin?.email || ""}</p>
                </div>
                <button type="button" onClick={handleLogout} className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">Logout</button>
            </div>
        </header>
    )
}; 

export default Topbar;