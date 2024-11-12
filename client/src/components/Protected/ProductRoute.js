import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {jwtDecode} from "jwt-decode"; // Ensure correct import

const getDecodedToken = (token) => {
    try {
        return jwtDecode(token); // Decode the JWT token
    } catch (e) {
        return null; // Return null if the token is invalid or expired
    }
};

const ProtectedRoute = ({ children, isAdminRequired = false }) => {
    // Get the 'token' cookie
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));

    // If no token is found, redirect to login page
    if (!token) {
        toast.error("You must login to access this page");
        return <Navigate to="/login" replace />;
    }

    // Extract the token value from the cookie
    const tokenValue = token.split('=')[1]; 
    const decodedToken = getDecodedToken(tokenValue); // Decode the token

    // If decoding fails (token is invalid or expired), redirect to login
    if (!decodedToken) {
        toast.error("Your session has expired, please login again");
        return <Navigate to="/login" replace />;
    }

    const { role } = decodedToken; // Get the role from the decoded token

    // If admin access is required and the user is not an admin, redirect to 404 page
    if (isAdminRequired && role !== 'admin') {
        toast.error("You are not authorized to access this page");
        return <Navigate to="/404" replace />;
    }

    // If the user is authenticated and authorized, render the protected route
    return children;
};

export default ProtectedRoute;
