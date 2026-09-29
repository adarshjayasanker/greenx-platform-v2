import { useEffect, useState } from "react"
import dashboardApi from "../../../api/dashboard.api";

const useDashboard = () => {
    const [overview, setOverview] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isCancelled = false;
        const loadDashboard = async() => {
            setIsLoading(true);

            try{
                const response = await dashboardApi.getOverview();
                if(isCancelled){
                    return;
                }
                setOverview(response.data);
                setError(null);
            }catch(error){
                if(isCancelled){
                    return;
                }
                setError(error);
            }finally{
                if(!isCancelled){
                    setIsLoading(false);
                };
            };
        };
        loadDashboard();

        return() => {
            isCancelled = true;
        };
    }, []);

    return{overview, isLoading, error};
};

export default useDashboard;