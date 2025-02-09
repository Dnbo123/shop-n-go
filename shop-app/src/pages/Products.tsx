import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

// This component fetches products data from API and renders a list of products
const Products = () => {
    // useQuery hook fetches products data and caches it
    // it returns data, isLoading and error
    const {data: products, isLoading, error } = useQuery(['products'], fetchProducts);

    // if data is still loading, show a loading message
    if (isLoading) return <div>Loading...</div>;
    // if there was an error, show an error message
    if (error) return <div>Error loading products</div>;

    // if data is loaded, render a list of products
    return (
        <div className="container mx-auto p-4">
          {/* header with title */}
          <h1 className="text-2xl font-bold mb-6">Our Products</h1>
          {/* grid with product cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* map over products and render a ProductCard for each one */}
            {products?.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      );
};

export default Products;
