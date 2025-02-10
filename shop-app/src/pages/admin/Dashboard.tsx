import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/api';

export const Dashboard = () => {
  const { data: products } = useQuery(['products'], fetchProducts);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3>Total Products</h3>
          <p className="text-2xl">{products?.length || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;