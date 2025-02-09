import React from 'react'; // Import React to create a functional component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import { useCart } from 'context/CartContext'; // Import useCart hook for cart context
import { ProductCardProps } from 'interfaces'; // Import ProductCardProps interface for type checking

// Create a functional component for a product card
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Get the dispatch function from the useCart hook
  const { dispatch } = useCart();
 
  // Return the JSX for the product card
  return (
    // Create a container element with a border, rounded corners, padding, shadow, and a link
    <div className="border rounded-lg p-4 shadow-md">
      <Link to={`/products/${product.id}`}>

        // Create an image element with the product image, alt text, and styles
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />

        // Create a heading element with the product name and styles
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>

        // Create a paragraph element with the product price and styles
        <p className="text-gray-600">${product.price}</p>
      </Link>

      // Create a button element with an event handler to add the product to the cart
      <button
        onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard; 
