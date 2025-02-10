import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types';
import { useCart } from 'context/CartContext';
import { ProductCardProps } from 'interfaces';

/**
 * The ProductCard component displays a single product card.
 * It receives a product object as a prop and displays its details.
 * The component also allows the user to add the product to the cart.
 */
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Display the product image */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        {/* Display the product name */}
        <h3 className="text-lg font-semibold">{product.name}</h3>
        {/* Display the product price */}
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        {/* Display a short description of the product */}
        <p className="text-sm text-gray-500 mt-2">
          {product.description.substring(0, 100)}...
        </p>
        {/* Display two buttons: one to view the product details and one to add the product to the cart */}
        <div className="mt-4 flex justify-between items-center">
          <Link 
            to={`/products/${product.id}`}
            className="text-blue-500 hover:text-blue-600"
          >
            View Details
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
