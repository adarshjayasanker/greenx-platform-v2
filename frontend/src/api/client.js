const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://api.greenxpcs.com";

const apiClient = async(path, options = {}) => {
    let response;
    try{
        response = await fetch(`${API_BASE_URL}${path}`, {
            ...options,
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
        });
    }catch (error){
        const networkError = new Error("Unable to connect to the server.");
        networkError.type = "network";
        networkError.originalError = error;
        throw networkError;
    }
    let data;
    try{
        data = await response.json();
    }catch{
        data = null;
    }
    if(!response.ok){
        const apiError = new Error(data?.message || "Something went wrong.");
        apiError.type = "api";
        apiError.status = response.status;
        apiError.data = data;
        throw apiError;
    }
    return data;
};

export default apiClient;