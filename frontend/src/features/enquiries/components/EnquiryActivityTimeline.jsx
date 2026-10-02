import EnquiryActivityItem from "./EnquiryActivityItem";

const EnquiryActivityTimeline = ({activities, isLoading, error}) => {
    if(isLoading){
        return(
            <div className="p-6">
                <p className="text-sm text-gray-500">Loading activity...</p>
            </div>
        );
    };
    if(error){
        return(
            <div className="p-6">
                <p className="text-sm text-red-600">Unable to load activity.</p>
            </div>
        );
    };
    if(activities.length === 0){
        return(
            <div className="p-6">
                <p className="text-sm text-gray-500">No activity yet.</p>
            </div>
        );
    };
    return(
        <div className="relative space-y-6 p-6">
            <div className="absolute bottom-6 left-4.25 top-6 w-px bg-gray-200"/>
            {activities.map((activity) => (
                <EnquiryActivityItem key={activity.id} activity={activity}/>
            ))}
        </div>
    )
};

export default EnquiryActivityTimeline;