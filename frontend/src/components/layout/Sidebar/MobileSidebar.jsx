import { NavLink } from "react-router-dom";
import navigationItems from "../navigation";

const MobileSidebar = ({isOpen, onClose}) => {

    if(!isOpen){
        return null;
    };

    return(
        <div className="fixed inset-0 z-50 md:hidden">
            <button type="button" aria-label="Close navigation" onClick={onClose} className="absolute inset-0 bg-black/30"/>
            <aside className="relative h-full w-72 max-w-[85vw] bg-white shadow-xl">
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
                    <div>
                        <p className="text-lg font-semibold">Greenx Admin</p>
                        <p className="mt-1 text-xs text-gray-500">Management Panel</p>
                    </div>
                    <button type="button" onClick={onClose} aria-label="Close navigation" className="rounded-md px-2 py-1 text-xl text-gray-500 hover:bg-gray-100 hover:text-gray-900">x</button>
                </div>
                <nav className="space-y-1 p-4">
                    {navigationItems.map((item) => (
                        <NavLink key={item.path} to={item.path} onClick={onClose} className={({isActive}) => ["block rounded-md px-3 py-2 text-sm font-medium transition", isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"].join(" ")}>{item.label}</NavLink>
                    ))}
                </nav>
            </aside>
        </div>
    )
};

export default MobileSidebar;