const validateFollowUp = (data) => {
    const errors = {};
    const {followUpAt} = data;
    if(followUpAt === null){
        return errors;
    }
    if(typeof followUpAt !== "string" || !followUpAt.trim()){
        errors.followUpAt = "Follow-up date must be a valid date or null.";
        return errors;
    }
    const parsedDate = new Date(followUpAt);
    if(Number.isNaN(parsedDate.getTime())){
       errors.followUpAt = "Invalid follow-up date."
    };
    return errors;
};

export default {validateFollowUp};