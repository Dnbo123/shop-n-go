import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from 'components/ProductCard';
import { Product } from 'types';

/**
 * The Products page component.
 * 
 * This component displays a list of products. It allows the user to search for products
 * by name, and to filter the products by category.
 */
export const Products: React.FC = () => {
  // Get the products from the useProducts hook.
  // The hook returns an object with two properties: products and isLoading.
  // The products property is an array of products, and the isLoading property is a boolean
  // that indicates whether the products are still being loaded.
  const { data:products, isLoading } = useProducts('');

  // Set up state variables for the search term and the category.
  // The search term is the text that the user enters in the search input field.
  // The category is the selected category from the category dropdown.
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // Filter the products based on the search term and category.
  // The filteredProducts variable is an array of products that match the search term
  // and category.
  const filteredProducts = products ? products.filter((product: Product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  }) : [];

  // If the products are still being loaded, display a loading message.
  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }
  
  // Otherwise, render the products list.
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* The search input field. */}
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-lg mb-4 md:mb-0 md:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* The category dropdown. */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          {/* The 'All Categories' option. */}
          <option value="all">All Categories</option>
          {/* Add your categories here */}
        </select>
      </div>
      
      {/* The products list. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {filteredProducts?.map((product: Product) => (
  <ProductCard key={product.id} product={product} />
))} 
      </div>
    </div>
  );
}

export default Products;

