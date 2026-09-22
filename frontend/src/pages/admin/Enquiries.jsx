import { useState } from "react";
import useEnquiries from "../../features/enquiries/hooks/useEnquiries";
import EnquiryFilters from "../../features/enquiries/components/EnquiryFilters";
import EnquiryTable from "../../features/enquiries/components/EnquiryTable";

const Enquiries = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const {enquiries, total, isLoading, error} = useEnquiries({page: 1, limit:20, status, search});
    return(
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Enquiries</h1>
                <p className="mt-1 text-sm text-gray-500">Manage enquiries received from the website.</p>
            </div>
            <EnquiryFilters search={search} status={status} onSearchChange={setSearch} onStatusChange={setStatus}/>
            {isLoading && (
                <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                    <p className="text-sm text-gray-500">Loading enquiries...</p>
                </div>
            )}
            {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                    <p className="text-sm text-red-700">Unable to load enquiries.</p>
                </div>
            )}
            {!isLoading && !error && (
                <>
                    <div className="flex justify-end">
                        <p className="text-sm text-gray-500">{total}{" "}{total === 1 ? "enquiry" : "enquiries"}</p>
                    </div>
                    <EnquiryTable enquiries={enquiries}/>
                </>
            )}
        </div>
    )
};

export default Enquiries;