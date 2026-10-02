import { useEffect, useState } from "react"
import enquiryApi from "../../../api/enquiry.api";

const useEnquiryActivities = (enquiryId) => {
    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isCancelled = false;
        const loadActivities = async() => {
            if(!enquiryId){
                setIsLoading(false);
                return;
            }
            setIsLoading(true);
            setError(null);
            try{
               const response = await enquiryApi.getEnquiryActivities(enquiryId);
               if(isCancelled){
                return;
               };
               setActivities(response.activities);
            }catch(requestError){
                if(isCancelled){
                    return;
                };
                setError(requestError);
            }finally{
                if(!isCancelled){
                    setIsLoading(false);
                }
            }
        };
        loadActivities();
        return() => {
            isCancelled = true;
        };
    }, [enquiryId]);

    const addNote = async(message) => {
        const response = await enquiryApi.createEnquiryNote(enquiryId, message);
        setActivities((current) => [
            ...current,
            response.activity,
        ]);
        return response.activity;
    };

    return {activities, isLoading, error, addNote}
};

export default useEnquiryActivities;