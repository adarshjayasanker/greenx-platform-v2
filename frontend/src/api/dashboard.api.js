import apiClient from "./client";

const getOverview = async() => {
    return apiClient('/dashboard/overview');
};

export default {getOverview};