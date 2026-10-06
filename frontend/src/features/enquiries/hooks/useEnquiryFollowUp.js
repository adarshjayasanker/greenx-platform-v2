import { useState } from "react";
import enquiryApi from "../../../api/enquiry.api";

const useEnquiryFollowUp = (enquiry) => {
    const [followUpOverride, setFollowUpOverride] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [error, setError] = useState(null);
    const hasOverride = followUpOverride?.enquiryId === enquiry?.id;
    const followUpAt = hasOverride ? followUpOverride?.value : enquiry?.followUpAt ?? null;
    const updateFollowUp = async(nextFollowUpAt) => {
        setIsUpdating(true);
        setError(null);
        try{
            const response = await enquiryApi.updateEnquiryFollowUp(enquiry.id, nextFollowUpAt);
            setFollowUpOverride({enquiryId: enquiry.id, value: response.data.followUpAt});
            return response.data;
        }catch(requestError){
            setError(requestError);
            throw requestError;
        }finally{
            setIsUpdating(false);
        }
    };
    return {followUpAt, isUpdating, error, updateFollowUp};
};

export default useEnquiryFollowUp;