import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';

// Create a QueryClient instance to manage caching
const queryClient = new QueryClient();

// The main App component
const App: React.FC = () => {
  return (
    // Wrap the app with the QueryClientProvider to enable caching
    <QueryClientProvider client={queryClient}>
      // Wrap the app with the BrowserRouter to enable client-side routing
      <BrowserRouter>
        // Wrap the app with the AuthProvider to manage authentication
        <AuthProvider>
          // Wrap the app with the CartProvider to manage the cart
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              // Render the Navbar at the top of the page
              <Navbar />
              // Render the main content area
              <main className="flex-grow">
                // Render the routes defined in AppRoutes
                <AppRoutes />
              </main>
              // Render the Footer at the bottom of the page
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
