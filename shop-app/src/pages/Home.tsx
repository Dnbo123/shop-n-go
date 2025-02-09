import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/api';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
 const { data: products, isLoading } = useQuery(['products'], fetchProducts);

 if (isLoading) return <div>Loading...</div>;

 return (
   <div className="container mx-auto px-4 py-8">
     <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       {products?.map(product => (
         <ProductCard key={product.id} product={product} />
       ))}
     </div>
   </div>
 );
};

export default Home;