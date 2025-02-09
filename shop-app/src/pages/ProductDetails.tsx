import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../services/api';
import { useCart } from '../context/CartContext';

/**
 * This page shows the details of a single product with an "Add to Cart"
 * button. It fetches the product data from the API using `useQuery` and
 * displays a loading message while the data is being fetched.
 */
export const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    const { data: product, isLoading } = useQuery(
      // The key for the query is the product ID. If the ID changes, the
      // query will be refetched.
      ['product', id],
      // The function to fetch the product data from the API.
      () => fetchProduct(id!)
    );

    // If the product data is still being fetched, display a loading message.
    if (isLoading || !product) {
      return <div className="text-center py-10">Loading...</div>;
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-2xl text-blue-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button
              // When the button is clicked, add the product to the cart.
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

