import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ProtectedRouteProps } from 'interfaces';

/**
 * A protected route component that only renders the children if the user is authenticated.
 * If the user is not authenticated, it redirects to the login page.
 * If the user is authenticated but does not have the required role, it redirects to the home page.
 * @param children The children components to render if the user is authenticated.
 * @param requireAdmin Whether the user must have the admin role to access the route.
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
    children, 
    requireAdmin = false 
  }) => {
    const { user, isAuthenticated } = useAuth();
  
    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
  
    // If the user is authenticated but does not have the required role, redirect to the home page
    if (requireAdmin && user?.role !== 'admin') {
      return <Navigate to="/" replace />;
    }
  
    // If the user is authenticated and has the required role, render the children
    return <>{children}</>;
  };

  export default ProtectedRoute;

