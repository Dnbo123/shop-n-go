import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Login = () => {
 const [credentials, setCredentials] = useState({ email: '', password: '' });
 const { login } = useAuth();
 const navigate = useNavigate();

 const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();
   await login(credentials.email, credentials.password);
   navigate('/');
 };

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