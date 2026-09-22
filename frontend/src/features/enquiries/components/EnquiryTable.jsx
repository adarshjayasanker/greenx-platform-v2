import EnquiryRow from "./EnquiryRow";

const EnquiryTable = ({enquiries}) => {
    if(enquiries.length === 0){
        return(
            <div className="rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center">
                <p className="text-sm text-gray-500">No Enquiries found.</p>
            </div>
        );
    };
    return(
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead className="border-b border-gray-200 bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Customer</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Phone</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Service</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">Received</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enquiries.map((enquiry) => (
                            <EnquiryRow key={enquiry.id} enquiry={enquiry}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default EnquiryTable;