import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from 'interfaces';

// Create a context for authentication state and functions
const AuthContext = createContext<AuthContextType | null>(null);

// Create a provider component for the authentication context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Set up state for the user
  const [user, setUser] = useState(null);

  // Get the navigate function from React Router
  const navigate = useNavigate();

  // Define the login function
  const login = async (credentials: any) => {
    // This is where an API call to log in would go
    // For now, just set the user state to a dummy object
    setUser({ id: 1, name: 'User', role: 'admin' });
    // Navigate to the home page
    navigate('/');
  };

  // Define the logout function
  const logout = () => {
    // Clear the user state
    setUser(null);
    // Navigate to the login page
    navigate('/login');
  };

  // Return the context provider, passing the user state and functions
  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a hook to use the authentication context
export const useAuth = () => {
  // Get the context
  const context = useContext(AuthContext);
  // If the context is null, throw an error
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  // Return the context
  return context;
};

export default AuthProvider;