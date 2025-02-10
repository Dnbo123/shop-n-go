import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

const Cart: React.FC = () => {
  const { state, removeFromCart, updateQuantity } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/products" className="text-blue-500 hover:text-blue-600">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      <div className="space-y-4">
        {state.items.map((item: CartItem) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <div className="ml-4">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 border rounded p-1 text-center"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Total: ${state.total.toFixed(2)}
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;