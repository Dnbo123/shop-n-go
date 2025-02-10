// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from 'pages/LandingPage';
import AdminDashboard from 'pages/AdminDashboard';
import Login from 'pages/Login';
import { ProductProvider } from 'context/ProductContext';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Main App component wrapping the entire application
const App: React.FC = () => {
  return (
    // AuthProvider wraps the app to manage authentication state
    <AuthProvider>
      {/* ProductProvider manages global product state */}
      <ProductProvider>
        {/* CartProvider manages shopping cart state */}
        <CartProvider>
          {/* BrowserRouter enables client-side routing */}
          <BrowserRouter>
            {/* Navbar is shown on all pages */}
            <Navbar />
            {/* Routes define the application's routing structure */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default App;