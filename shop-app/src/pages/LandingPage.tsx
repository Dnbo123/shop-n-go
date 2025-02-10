import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

/**
 * The LandingPage component displays a list of featured products on the homepage.
 * It uses the useQuery hook from React Query to fetch the products from the API.
 * The component renders a loading spinner while the data is being fetched,
 * and then renders a list of ProductCard components with the featured products.
 */
export const LandingPage: React.FC = () => {
  /**
   * Use the useQuery hook to fetch the products from the API.
   * The query key is an array with a single string element, which is used to
   * identify the query in the cache.
   * The query function is the fetchProducts function, which returns a promise
   * that resolves to an array of Product objects.
   */
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  // If the data is still being fetched, render a loading spinner.
  if (isLoading) return <LoadingSpinner />;

  // Select the first 6 products from the array of products.
  const featuredProducts = products.slice(0, 6);

  // Render the list of featured products.
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-8">Welcome to Our Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;

