// src/routes.tsx

// Importing page components for different routes
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import Login from './pages/Login';

// Define the application's route configuration
export const routes = [
    // Route for home page, accessible without authentication
    { path: '/', element: <Home />, protected: false },
    // Route for products listing page, accessible without authentication
    { path: '/products', element: <Products />, protected: false },
    // Route for individual product details, accessible without authentication
    { path: '/products/:id', element: <ProductDetails />, protected: false },
    // Route for cart page, requires user to be authenticated
    { path: '/cart', element: <Cart />, protected: true },
    // Route for admin section, requires user to be authenticated
    { path: '/admin/*', element: <Admin />, protected: true },
    // Route for login page, accessible without authentication
    { path: '/login', element: <Login />, protected: false }
];

// Export the routes array as the default export
export default routes;
