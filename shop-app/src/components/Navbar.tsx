import React from 'react'; // Import React to create a functional component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { useAuth } from '../context/AuthContext'; // Import useAuth hook for authentication context
import { useCart } from '../context/CartContext'; // Import useCart hook for cart context

const Navbar = () => {
  // Destructure user and logout from useAuth hook
  const { user, logout } = useAuth(); 
  // Destructure state as cart from useCart hook
  const { state: cart } = useCart();

  return (
    // Navigation bar with gray background and padding
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Link to home page with shop title */}
        <Link to="/" className="text-white text-xl font-bold">Shop</Link>
        <div className="flex items-center space-x-6">
          {/* Link to products page */}
          <Link to="/products" className="text-white">Products</Link>
          {/* Link to cart page with cart item count */}
          <Link to="/cart" className="text-white">
            Cart ({cart.items.length})
          </Link>
          {/* Conditional rendering based on user authentication status */}
          {user ? (
            <>
              {/* Show admin link if user role is admin */}
              {user.role === 'admin' && (
                <Link to="/admin" className="text-white">Admin</Link>
              )}
              {/* Logout button */}
              <button onClick={logout} className="text-white">Logout</button>
            </>
          ) : (
            // Link to login page if user is not authenticated
            <Link to="/login" className="text-white">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Export the Navbar component as default
