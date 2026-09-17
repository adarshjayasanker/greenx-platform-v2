import apiClient from "./client";

const login = async(credentials) => {
    return apiClient('/auth/login', {
        method: "POST",
        body: JSON.stringify(credentials),
    });
};

const getCurrentAdmin = async() => {
    return apiClient('/auth/me');
};

const logout = async() => {
    return apiClient('/auth/logout', {
        method: "POST",
    });
};

export default {login, getCurrentAdmin, logout}