const EnquiryActivityItem = ({activity}) => {
    const isStatusChange = activity.type === "status-change";

    return(
        <div className="relative pl-8">
            <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gray-400"/>
            <div>
                <p className="text-sm font-medium text-gray-900">{isStatusChange ? "Status changed" : "Note"}</p>
                <p className='mt-1 text-sm leading-6 text-gray-700'>{activity.message}</p>
                <div className='mt-2 flex flex-wrap gap-2 text-xs text-gray-500'>
                    <span>
                        {activity.createdBy?.name || "Administrator"}
                    </span>
                    <span>•</span>
                    <span>
                        {new Date(activity.createdAt).toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    )
};

export default EnquiryActivityItem;