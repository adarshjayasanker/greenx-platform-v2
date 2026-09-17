import { useEffect, useState } from 'react';
import authApi from '../../api/auth.api';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const [admin, setAdmin] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const restoreSession = async() => {
            try{
                const response = await authApi.getCurrentAdmin();
                setAdmin(response.admin);
            }catch{
                setAdmin(null);
            }finally{
                setIsLoading(false);
            }
        };
        restoreSession();
    }, []);

    const login = async(credentials) => {
        const response = await authApi.login(credentials);
        setAdmin(response.admin);
        return response;
    };

    const logout = async() => {
        try{
            await authApi.logout();
        }finally{
            setAdmin(null);
        }
    };

    return(
        <AuthContext.Provider value={{admin, isLoading, isAuthenticated: Boolean(admin), login, logout,}}>{children}</AuthContext.Provider>
    )
};

export default AuthProvider;