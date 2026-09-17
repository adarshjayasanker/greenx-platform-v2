import { Navigate, Outlet, useLocation } from 'react-router-dom';

import useAuth from '../features/auth/components/useAuth';

const RequireAuth = () => {
    const {isAuthenticated, isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){
        return(
            <div className='min-h-screen flex items-center justify-center'>
                <p>Loading...</p>
            </div>
        )
    }
    if(!isAuthenticated){
        return(
            <Navigate to="/greenx-admin/login" replace state={{from: location}}/>
        )
    };

    return <Outlet/>
};

export default RequireAuth;