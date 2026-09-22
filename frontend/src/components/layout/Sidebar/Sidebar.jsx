import { NavLink } from "react-router-dom";

const navigationItems = [
    {
        label: "Dashboard",
        path: "/greenx-admin/dashboard",
    },
    {
        label: "Leads",
        path: '/greenx-admin/enquiries',
    },
    // {
    //     label: "Services",
    //     path: "/greenx-admin/services",
    // },
    // {
    //     label: "Gallery",
    //     path: "/greenx-admin/gallery",
    // },
    // {
    //     label: "Testimonials",
    //     path: "/greenx-admin/testimonials",
    // },
    // {
    //     label: "Settings",
    //     path: "/greenx-admin/settings",
    // },
]

const Sidebar = () => {
    return(
        <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white md:flex md:flex-col">
            <div className="border-b border-gray-200 px-6 py-5">
                <p className="text-lg font-semibold">Greenx Admin</p>
                <p className="mt-1 text-xs text-gray-500">Management Panel</p>
            </div>
            <nav className="flex-1 space-y-1 p-4">
                {navigationItems.map((item) => (
                    <NavLink key={item.path} to={item.path} className={({isActive}) => 
                    ["block rounded-md px-3 py-2 text-sm font-medium transition", isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 gover:bg-gray-50 hover:text-gray-900",].join(" ")
                }
                >{item.label}</NavLink>
                ))}
            </nav>
        </aside>
    )
}; 

export default Sidebar;