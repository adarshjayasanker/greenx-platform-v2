import { useEffect } from "react";
import { useState } from "react";
import enquiryApi from "../../../api/enquiry.api";

const useEnquiry = (id) => {
    const [enquiry, setEnquiry] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        if(!id){
            return;
        };
        let isCancelled = false;
        const loadEnquiry = async() => {
            setIsLoading(true);
            setError(null);
            try{
                const response = await enquiryApi.getEnquiryById(id);
                console.log(response);
                if(isCancelled){
                    return;
                };
                setEnquiry(response.data);
            }catch(error){
                if(isCancelled){
                    return;
                };
                setError(error);
            }finally{
                if(!isCancelled){
                    setIsLoading(false);
                }
            }
        };
        loadEnquiry();
        return() => {
            isCancelled = true;
        };
    }, [id]);
    return{enquiry, isLoading, error};
};

export default useEnquiry;