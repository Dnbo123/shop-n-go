import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { state: cart } = useCart();

    return(
        <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Shop</Link>
        <div className="flex items-center space-x-6">
          <Link to="/products" className="text-white">Products</Link>
          <Link to="/cart" className="text-white">
            Cart ({cart.items.length})
          </Link>
          {user ? (
            <>
              {user.role === 'admin' && (
                <Link to="/admin" className="text-white">Admin</Link>
              )}
              <button onClick={logout} className="text-white">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-white">Login</Link>
          )}
        </div>
      </div>
    </nav>
    );
};

export default Navbar;