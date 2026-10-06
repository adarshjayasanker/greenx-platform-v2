import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import useEnquiries from "../../features/enquiries/hooks/useEnquiries";
import EnquiryFilters from "../../features/enquiries/components/EnquiryFilters";
import EnquiryTable from "../../features/enquiries/components/EnquiryTable";
import EnquiryPagination from "../../features/enquiries/components/EnquiryPagination";

const Enquiries = () => {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("");
    const [searchParams] = useSearchParams();
    const attention = searchParams.get("attention") === "true";
    const {enquiries, total, totalPages, isLoading, error} = useEnquiries({page, limit:20, status, search, attention});
    const handleSearchChange = (value) => {
        setSearch(value);
        setPage(1);
    };
    const handleStatusChange = (value) => {
        setStatus(value);
        setPage(1);
    }
    return(
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Enquiries</h1>
                <p className="mt-1 text-sm text-gray-500">{attention ? "Enquiries that need attention." : "Manage enquiries received from the website"}</p>
            </div>
            <EnquiryFilters search={search} status={status} onSearchChange={handleSearchChange} onStatusChange={handleStatusChange}/>
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
                    <EnquiryPagination page={page} totalPages={totalPages} onPageChange={setPage} />
                </>
            )}
        </div>
    )
};

export default Enquiries;