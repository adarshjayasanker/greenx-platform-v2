import { Link, useParams } from "react-router-dom";
import useEnquiry from "../../features/enquiries/hooks/useEnquiry";
import { useState } from "react";
import enquiryApi from "../../api/enquiry.api";
import EnquiryStatusBadge from "../../features/enquiries/components/EnquiryStatusBadge";

const statuses = ["new", "contacted", "in-progress", "converted", "closed"];

const EnquiryDetails = () => {
    const {id} = useParams();

    const {enquiry, isLoading, error} = useEnquiry(id);
    const [statusOverride, setStatusOverride] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [updateError, setUpdateError] = useState(null);
    const currentStatus = statusOverride ?? enquiry?.status;

    const handleStatusChange = async(event) => {
        const nextStatus = event.target.value;
        if(!enquiry || nextStatus === currentStatus){
            return;
        }
        const previousStatus = currentStatus;
        setIsUpdating(true);
        setUpdateError(null);
        
        setStatusOverride(nextStatus);

        try {
            const response = await enquiryApi.updateEnquiryStatus(enquiry.id, nextStatus);
            setStatusOverride(response.data.status);
        } catch (error) {
            setStatusOverride(previousStatus);
            setUpdateError(error?.message || "Unable to update enquiry status.");
        }finally{
            setIsUpdating(false);
        }
    };
    if(isLoading){
        return(
            <div>
                <p className="text-sm text-gray-500">Loading Enquiry...</p>
            </div>
        );
    };
    if(error || !enquiry){
        return(
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold">Enquiry not found.</h1>
                <p className="text-sm text-gray-500">The enquiry could not be loaded.</p>
                <Link to='/greenx-admin/enquiries' className="inline-block text-sm font-medium underline">Back to Enquiries</Link>
            </div>
        )
    }
    return(
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <Link to="/greenx-admin/enquiries" className="text-sm text-gray-500 hover:text-gray-900">Back to Enquiries</Link>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-900">Enquiry Details</h1>
                </div>
                <EnquiryStatusBadge status={enquiry.status}/>
            </div>
            {updateError && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="text-sm text-red-700">{updateError}</p>
                </div>
            )}
            <div className="grid gap-6 lg:grid-cols-3">
                <section className="rounded-lg border border-gray-200 bg-white p-6 lg:col-span-2">
                    <h2 className="text-lg font-semibold">Customer</h2>
                    <div className="mt-5 grid gap-5 sm:grid-cols-2">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Name</p>
                            <p className="mt-1 text-sm text-gray-900">{enquiry.name}</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Phone</p>
                            <p className="mt-1 text-sm text-gray-900">{enquiry.phone}</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Email</p>
                            <p className="mt-1 text-sm text-gray-900">{enquiry.email}</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Service</p>
                            <p className="mt-1 text-sm text-gray-900">{enquiry.service}</p>
                        </div>
                    </div>
                </section>
                <section className="rounded-lg border border-gray-200 bg-white p-6">
                    <h2 className="text-lg font-semibold">Status</h2>
                    <label htmlFor="enquiry-status" className="mt-4 block text-sm font-medium text-gray-700">Current Status</label>
                    <select id="enquiry-status" value={currentStatus} onChange={handleStatusChange} disabled={isUpdating} className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500 disabled:opacity-50">
                        {statuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                    {isUpdating && (
                        <p className="mt-2 text-xs text-gray-500">Updating status...</p>
                    )}
                </section>
                <section className="rounded-lg border border-gray-200 bg-white p-6 lg:col-span-3">
                    <h2 className="text-lg font-semibold">Enquiry Message</h2>
                    <p className="mt-4 whitespace-pre-wrap text-sm leading-6 text-gray-700">{enquiry.message}</p>
                </section>
                <section className="rounded-lg border border-gray-200 bg-white p-6 lg:col-span-3">
                    <h2 className="text-lg font-semibold">Information</h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Received</p>
                            <p className="mt-1 text-sm text-gray-900">{new Date(enquiry.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Source</p>
                            <p className="mt-1 text-sm text-gray-900">{enquiry.source}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
};

export default EnquiryDetails;