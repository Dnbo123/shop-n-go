import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ProtectedRouteProps } from 'interfaces';

/**
 * ProtectedRoute component ensures that routes are only accessible to authenticated users.
 * It can also restrict access to users with specific roles (e.g., admin).
 * 
 * @param children - The components to render if access is granted.
 * @param requireAdmin - A flag to indicate if admin role is required for access.
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireAdmin = false }) => {
  const { user } = useAuth(); // Retrieve the current user from authentication context

  // Redirect unauthenticated users to the login page
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect users without admin role to the home page if admin access is required
  if (requireAdmin && user.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  // Render child components if user is authenticated and, if required, has admin role
  return <>{children}</>;
};

export default ProtectedRoute;

