import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Navbar component displays a navigation bar at the top of the page
const Navbar: React.FC = () => {
  // Extract the cart state from custom hook
  const { state } = useCart();

  return (
    // Navigation section with a background and text color
    <nav className="bg-gray-800 text-white">
      {/* Container to center the content horizontally */}
      <div className="container mx-auto px-6 py-4">
        {/* Flex container to layout items horizontally */}
        <div className="flex items-center justify-between">
          {/* Link to the homepage */}
          <Link to="/" className="text-xl font-bold">shopNgo</Link>
          {/* Flex container for navigation links */}
          <div className="flex items-center space-x-6">
            {/* Link to the products page */}
            <Link to="/products">Products</Link>
            {/* Link to the cart page showing number of items in cart */}
            <Link to="/cart" className="flex items-center">
              Cart ({state.items.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

