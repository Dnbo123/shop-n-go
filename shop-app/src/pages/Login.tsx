import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import { useAuth } from '../context/AuthContext'; // Import useAuth hook for authentication

// Define the Login component
export const Login = () => {
  // Set up state for user credentials
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  // Get the login function from the auth context
  const { login } = useAuth();
  // Get the navigate function to programmatically navigate
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    await login(credentials.email, credentials.password); // Call login with email and password
    navigate('/'); // Navigate to the home page after successful login
  };

  // Render the login form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={credentials.email}
          onChange={e => setCredentials({ ...credentials, email: e.target.value })}
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={e => setCredentials({ ...credentials, password: e.target.value })}
          className="w-full p-2 border rounded mb-4"
        />
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
