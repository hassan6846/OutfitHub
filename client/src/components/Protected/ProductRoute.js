import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, requiredRole }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const roles = useSelector((state) => state.user.role);

  if (!isAuthenticated) {
    toast.error("You must log in to access this page");
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !roles.includes(requiredRole)) {
    toast.error("You do not have permission to access this page");
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default ProtectedRoute;
