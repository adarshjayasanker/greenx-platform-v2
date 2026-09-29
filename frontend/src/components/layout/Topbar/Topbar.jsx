import { useNavigate } from "react-router-dom";
import useAuth from "../../../features/auth/components/useAuth";

const Topbar = ({onMenuOpen}) => {
    const {admin, logout} = useAuth();
    const navigate = useNavigate();
    const handleLogout = async() => {
        await logout();
        navigate('/greenx-admin/login', {
            replace: true,
        });
    };
    return(
        <header className="flex min-h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
            <div className="flex items-center gap-3">
                <button type="button" onClick={onMenuOpen} aria-label="Open navigation" className="rounded-md px-2 py-1 text-xl text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden">☰</button>
                <div>
                    <p className="text-sm font-medium text-gray-900">Greenx Administration</p>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="hidden text-right sm:block">
                    <p className="text-sm font-medium text-gray-900">{admin?.name || "Administrator"}</p>
                    <p className="text-xs text-gray-500">{admin?.email || ""}</p>
                </div>
                <button type="button" onClick={handleLogout} className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">Logout</button>
            </div>
        </header>
    )
}; 

export default Topbar;