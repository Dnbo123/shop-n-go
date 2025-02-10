import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { sampleProducts } from '../../data/sampleProducts';

const Dashboard: React.FC = () => {
  // Using sample data since we don't have a real API
  const products = sampleProducts;
  const totalRevenue = products.reduce((sum, product) => sum + product.price, 0);
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Products</h3>
          <p className="text-3xl mt-2">{products.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Revenue</h3>
          <p className="text-3xl mt-2">${totalRevenue.toFixed(2)}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Total Stock</h3>
          <p className="text-3xl mt-2">{totalStock}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;