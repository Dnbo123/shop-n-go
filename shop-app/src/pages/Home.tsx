import React from 'react';
import ProductCard from '../components/ProductCard';
import { sampleProducts } from '../data/sampleProducts';

const Home: React.FC = () => {
  const featuredProducts = sampleProducts.filter(product => product.featured);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Shop</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;