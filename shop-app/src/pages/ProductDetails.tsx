// src/pages/ProductDetails.tsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchSingleProduct } from '../services/api';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [imageLoading, setImageLoading] = useState(true);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchSingleProduct(id!),
    enabled: !!id,
    retry: 1
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Unable to load product details</p>
        <button 
          onClick={() => navigate(-1)}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          ← Back to products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative bg-white rounded-lg shadow-md p-4">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <LoadingSpinner />
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-auto object-contain ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={() => setImageLoading(false)}
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-4 text-2xl text-blue-600">${Number(product.price).toFixed(2)}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          <div>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.floor(product.rating) ? '★' : '☆'}
                  </span>
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;