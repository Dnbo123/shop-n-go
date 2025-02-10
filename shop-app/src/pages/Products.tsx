import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { sampleProducts, categories } from '../data/sampleProducts';

const Products: React.FC = () => {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const { data: products, isLoading } = useQuery<Product[]>(
    ['products'],
    async () => {
      // For now, return sample data
      return sampleProducts;
    }
  );

  const filteredProducts = products?.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

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
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;