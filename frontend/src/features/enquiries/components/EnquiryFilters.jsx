const EnquiryFilters = ({search, status, onSearchChange, onStatusChange}) => {
    return(
        <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-4 md:flex-row md:items-center">
            <div className="flex-1">
                <label htmlFor="enquiry-search" className="sr-only">Search enquiries</label>
                <input id="enquiry-search" type="search" value={search} onChange={(event) => onSearchChange(event.target.value)} placeholder="Search by name, email, or phone..." className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-500" />
            </div>
            <div>
                <label htmlFor="enquiry-status" className="sr-only">Filter by status</label>
                <select id="enquiry-status" value={status} onChange={(event) => onStatusChange(event.target.value)} className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500 md:w-48">
                    <option value="">All statuses</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="in-progress">In Progress</option>
                    <option value="converted">Converted</option>
                    <option value="closed">Closed</option>
                </select>
            </div>
        </div>
    )
};

export default EnquiryFilters;