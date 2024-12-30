import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from "js-cookie";
import { setAuth } from '../../Slices/UserSlices';
import { useEffect } from 'react';

const ProtectedRoute = ({ children, requiredRole }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const cookie = Cookie.get("token");
  const roles = useSelector((state) => state.user.role);

  // Handle the logic when the component mounts or the cookie changes
  useEffect(() => {
    if (!cookie) {
      dispatch(setAuth(false));
    }
  }, [cookie, dispatch]); // Re-run effect when cookie value changes

  // Check if the user is not authenticated or doesn't have the token
  if (!isAuthenticated && !cookie) {
    toast.error("You must log in to access this page or Page won't exist");
    return <Navigate to="/login" replace />;
  }

  // Check if the user doesn't have the required role
  if (requiredRole && !roles.includes(requiredRole)) {
    toast.error("You do not have permission to access this page");
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default ProtectedRoute;
