import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/api';
import { ProductCard } from 'components/ProductCard';

export const AdminDashboard = () => {
 const { data: products, isLoading } = useQuery(['products'], fetchProducts);

 return (
   <div className="container mx-auto px-4 py-8">
     <section className="mb-12">
       <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {isLoading ? (
           <div>Loading...</div>
         ) : (
           products?.slice(0, 6).map(product => (
             <ProductCard key={product.id} product={product} />
           ))
         )}
       </div>
     </section>
   </div>
 );
};

export default AdminDashboard;