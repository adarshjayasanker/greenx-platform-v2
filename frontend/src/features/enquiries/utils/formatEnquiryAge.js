const formatEnquiryAge = (date) => {
    const createdAt = new Date(date);
    const now = new Date();
    const differenceInSeconds = Math.floor((now - createdAt) / 1000);
    if(differenceInSeconds < 60){
        return "Just now";
    }
    const differenceInMinutes = Math.floor(differenceInSeconds/60);
    if(differenceInMinutes < 60){
        return `${differenceInMinutes} ${differenceInMinutes === 1 ? "minute" : "minutes"} ago`;
    }
    const differenceInHours = Math.floor(differenceInMinutes/60);
    if(differenceInHours < 24){
        return `${differenceInHours} ${differenceInHours === 1 ? "hour" : "hours"} ago`;
    }
    const differenceInDays = Math.floor(differenceInHours/24);
    if(differenceInDays === 1){
        return "Yesterday";
    }
    return `${differenceInDays} days ago`;
};

export default formatEnquiryAge;