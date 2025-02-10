// src/pages/Products.tsx
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types';
import { fetchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

/**
 * The Products page displays a list of products that can be filtered by category and searched by name.
 * The products are fetched from the API using useQuery.
 */
const Products: React.FC = () => {
  // State to store the current category filter and search term
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch products from the API using useQuery
  const { data: products = [], isLoading, error } = useQuery<Product[]>({
    // The query key is an array that uniquely identifies the query
    queryKey: ['products'],
    // The query function is the function that fetches the data from the API
    queryFn: fetchProducts
  });

  // If the products are still loading, display a loading spinner
  if (isLoading) return <LoadingSpinner />;
  // If there was an error loading the products, display an error message
  if (error) return <div>Error loading products</div>;

  // Filter the products based on the current category filter and search term
  const filteredProducts = products.filter((product: Product) => {
    // If the category is set to 'all', include all products
    const matchesCategory = category === 'all' || product.category === category;
    // If the search term is not empty, only include products that match the search term
    const matchesSearch = searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get the list of unique categories from the products
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full md:w-64"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded w-full md:w-48"
        >
          <option value="all">All Categories</option>
          {categories.map((cat: string) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
