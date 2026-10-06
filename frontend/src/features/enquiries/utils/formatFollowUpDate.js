const formatFollowUpDate = (date) => {
    if(!date){
        return "";
    };
    return new Date(date).toLocaleString();
};

export default formatFollowUpDate;