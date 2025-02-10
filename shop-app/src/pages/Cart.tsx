import React from 'react';
import { useCart } from '../context/CartContext';

// The Cart component displays the shopping cart contents to the user.
// It uses the useCart hook to access the cart state and functions.
export const Cart = () => {
  // Destructure state, removeFromCart, and updateQuantity from the useCart hook
  const { state, removeFromCart, updateQuantity } = useCart();

  // Render the shopping cart contents
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {state.items.map(item => (
        // Render each item in the cart as a row
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          {/* Display the item name and price */}
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>${item.price.toFixed(2)} × {item.quantity}</p>
          </div>
          {/* Provide a button to remove the item from the cart */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
      {/* Display the total cost of the items in the cart */}
      <div className="mt-4 text-xl">
        Total: ${state.total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;

