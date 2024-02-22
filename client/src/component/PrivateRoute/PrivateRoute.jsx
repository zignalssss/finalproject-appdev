import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
    // State to hold the token
    const [token, setToken] = useState(null);

    useEffect(() => {
        // Retrieve token from cookie
        const cookieToken = getCookie('token');
        if (cookieToken) {
            setToken(cookieToken);
        }
    }, []);

    const getCookie = (name) => {
        console.log(name);
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };
  
    return (
        token ? <Outlet /> : <Navigate to="/signin" />
    );
};

export default PrivateRoutes;
