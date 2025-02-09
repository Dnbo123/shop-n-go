import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from 'interfaces';
import { User } from '../types';

// Create a context for authentication state and functions
const AuthContext = createContext<AuthContextType | null>(null);



// Create a provider component for the authentication context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Set up state for the user
const [user, setUser] = useState<User | null>(null);

  // Define the login function
  const login = async (email:string, password: string) => {
    //implement login logic
    setUser({ id: '1',email, role: 'admin' });
  };

  // Define the logout function
  const logout = () => setUser(null);

  // Return the context provider, passing the user state and functions
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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