import { useState } from "react"
import enquiryApi from "../../../api/enquiry.api";
import { useEffect } from "react";

const useEnquiries = ({
    page = 1,
    limit = 20,
    status = "",
    search = "",
    attention = false,
} = {}) => {

    const [enquiries, setEnquiries] = useState([]);
    const [total, setTotal] = useState(0);

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isCancelled = false;

        const loadEnquiries = async() => {
            setIsLoading(true);
            try{
                const response = await enquiryApi.getEnquiries({page, limit, status, search, attention});
                if(isCancelled){
                    return;
                }
                console.log(response, "Enquiry response");
                setEnquiries(response.data);
                setTotal(response.pagination.total);
                setError(null);
            }catch(error){
                if(isCancelled){
                    return;
                }
                setError(error);
            }finally{
                if(!isCancelled){
                    setIsLoading(false);
                }
            }
        }
        loadEnquiries();
        return() => {
            isCancelled = true;
        };
    }, [page, limit, status, search, attention]);
    const totalPages = Math.ceil(total/limit);
    return{enquiries, total, totalPages, isLoading, error};
}

export default useEnquiries;