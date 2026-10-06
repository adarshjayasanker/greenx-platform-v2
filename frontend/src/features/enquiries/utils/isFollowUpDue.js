const isFollowUpDue = (enquiry) => {
    if(!enquiry.followUpAt){
        return false;
    };
    const followUpAt = new Date(enquiry.followUpAt);
    const now = new Date();
    return followUpAt <= now;
};

export default isFollowUpDue;