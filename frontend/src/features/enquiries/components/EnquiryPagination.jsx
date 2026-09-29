const EnquiryPagination = ({page, totalPages, onPageChange}) => {
    if(totalPages <= 1){
        return null;
    };
    const canGoPrevious = page > 1;
    const canGoNext = page < totalPages;
    return(
        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3">
            <button type="button" disabled={!canGoPrevious} onClick={() => onPageChange(page-1)} className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">Previous</button>
            <p className="text-sm text-gray-500">Page {page} of {totalPages}</p>
            <button type="button" disabled={!canGoNext} onClick={onPageChange(page + 1)} className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50">Next</button>
        </div>
    )
};

export default EnquiryPagination;