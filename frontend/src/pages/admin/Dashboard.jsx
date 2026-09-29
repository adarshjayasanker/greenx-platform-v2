import useDashboard from "../../features/dashboard/hooks/useDashboard";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const {overview, isLoading, error} = useDashboard();

    if(isLoading){
        return(
            <div className="rounded-lg border border-gray-200 bg-white p-8">
                <p className="text-sm text-gray-500">Loading dashboard...</p>
            </div>
        );
    }
    if(error){
        return(
            <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                <p className="text-sm text-red-700">Unable to load dashboard data.</p>
            </div>
        )
    };
    return(
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">Overview of your Greenx enquiries.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">Total Enquiries</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{overview.totalEnquiries}</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">New</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{overview.newEnquiries}</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">Contacted</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{overview.contactedEnquiries}</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">In Progress</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{overview.inProgressEnquiries}</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">Converted</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{overview.convertedEnquiries}</p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-5">
                    <p className="text-sm text-gray-500">Closed</p>
                    <p className="mt-2 text-3xl font-semibold text-gray-900">{overview.closedEnquiries}</p>
                </div>
            </div>
            <section className="rounded-lg border border-gray-200 bg-white">
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Enquiries</h2>
                    <Link to='/greenx-admin/enquiries' className="text-sm font-medium text-gray-700 hover:text-gray-900">View all</Link>
                </div>
                <div className="divide-y divide-gray-200">
                    {overview.recentEnquiries.length === 0 ? (
                        <div className="p-6">
                            <p className="text-sm text-gray-500">No enquiries yet.</p>
                        </div>
                    ) : (
                        overview.recentEnquiries.map((enquiry) => (
                            <Link key={enquiry.id} to={`/greenx-admin/leads/${enquiry.id}`} className="flex items-center justify-between gap-4 px-6 py-4 transition hover:bg-gray-50">
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-medium text-gray-900">{enquiry.name}</p>
                                    <p className="mt-1 text-xs text-gray-500">{enquiry.service}</p>
                                </div>
                                <p className="shrink-0 text-xs text-gray-500">
                                    {new Date(enquiry.createdAt).toLocaleDateString()};
                                </p>
                            </Link>
                        ))
                    )}
                </div>
            </section>
        </div>
    )
}; 

export default Dashboard;