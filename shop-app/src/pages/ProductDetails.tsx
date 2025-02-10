import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types';
import { fetchProduct } from 'utils/api';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';

// ProductDetails component, a functional React component
const ProductDetails: React.FC = () => {
  // Get the product ID from the URL parameters
  const { id } = useParams<{ id: string }>();

  // Get the addToCart function from the useCart hook
  const { addToCart } = useCart();

  // State variables to track image loading and error states
  const [imageError, setImageError] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);

  // Use the useQuery hook to fetch the product data
  const { data: product, isLoading } = useQuery<Product>({
    // Unique key for the query
    queryKey: ['product', id],
    // Function to fetch the product data
    queryFn: () => fetchProduct(id!),
    // Only enable the query if the product ID is present
    enabled: !!id
  });

  // If the product data is still loading or not available, display a loading spinner
  if (isLoading || !product) return <LoadingSpinner />;

  // Render the product details
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 bg-gray-100 rounded-lg">
          {/* Display a loading animation while the image is loading */}
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          )}
          {/* Render the product image */}
          <img
            // Use a placeholder image if the original image fails to load
            src={imageError ? '/api/placeholder/400/400' : product.image}
            alt={product.name}
            className={`w-full h-full object-contain p-4 rounded-lg transition-opacity duration-300 ${
              isImageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            // Set the image loading state to false when the image is loaded
            onLoad={() => setIsImageLoading(false)}
            // Set the image error state to true and loading state to false if the image fails to load
            onError={() => {
              setImageError(true);
              setIsImageLoading(false);
            }}
          />
        </div>
        <div>
          {/* Render the product name */}
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          {/* Render the product price */}
          <p className="text-2xl text-blue-600 mb-4">
            ${product.price.toFixed(2)}
          </p>
          {/* Render the product description */}
          <p className="text-gray-600 mb-6">{product.description}</p>
          {/* Render the product rating */}
          <div className="flex items-center mb-6">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
              ))}
            </div>
            {/* Render the number of reviews */}
            <span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
          </div>
          {/* Render the "Add to Cart" button */}
          <button
            // Call the addToCart function when the button is clicked
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
