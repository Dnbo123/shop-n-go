import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/api';
import ProductCard from 'components/ProductCard';

// The LandingPage component renders a section with a heading and a grid of products.
// The products are fetched using the fetchProducts function from the api service
// and stored in the products state variable.
export const LandingPage = () => {
  const { data: products, isLoading } = useQuery(['products'], fetchProducts);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* If the products are still being fetched, show a loading message */}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            // Otherwise, render the first 6 products in the products array
            products?.slice(0, 6).map(product => (
              // Render a ProductCard component for each product
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
