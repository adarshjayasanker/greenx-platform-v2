const isStaleEnquiry = (enquiry) => {
    if(enquiry.status !== "new"){
        return false;
    }
    const createdAt = new Date(enquiry.createdAt);
    const now = new Date();
    const differenceInMilliseconds = now - createdAt;
    const differenceInDays = differenceInMilliseconds/(1000 * 60 * 60 * 24);
    return differenceInDays >= 2;
};

export default isStaleEnquiry;