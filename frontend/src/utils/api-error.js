const getApiErrorMessage = (error) => {
    if(error?.type === "network"){
        return "We couldn't connect to our server. Please check your connection and try again.";
    }
    if(error?.status === 400){
        return(
            error?.data?.message || "Please check the information you entered."
        );
    };
    return(
        error?.message || "Something went wrong. Please try again."
    )
};

const getApiFieldErrors = (error) => {
    if(error?.status === 400 && error?.data?.errors){return error.data.errors}
    return {};
}

export default {getApiErrorMessage, getApiFieldErrors};