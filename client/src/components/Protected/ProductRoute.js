import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getToken,isTokenExpired } from '../../helpers/util';

// A utility to check if the user has the required role
const hasRole = (requiredRole) => {
  const decodedToken = getToken();
  return decodedToken && decodedToken.role && decodedToken.role.includes(requiredRole);
};

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = getToken();

  // Check if the token exists and if it's not expired
  if (!token || isTokenExpired()) {
    toast.error("You must log in to access this page");
    return <Navigate to="/login" replace />;
  }

  // Check if the required role is present in the token
  if (requiredRole && !hasRole(requiredRole)) {
    toast.error("You do not have permission to access this page");
    return <Navigate to="/404" replace />;
  }

  // If the user has the required role, render the children
  return children;
};

export default ProtectedRoute;
