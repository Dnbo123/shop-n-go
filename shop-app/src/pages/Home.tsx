import React from 'react';
import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../data/sampleProducts';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
