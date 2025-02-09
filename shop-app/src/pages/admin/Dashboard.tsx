import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchOrders } from '../../services/api';

// Define the Dashboard component
export const Dashboard = () => {
  // Query the products data using the useQuery hook
  const { data: products } = useQuery(['products'], fetchProducts);
  // Query the orders data using the useQuery hook
  const { data: orders } = useQuery(['orders'], fetchOrders);

  // Render the dashboard UI
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Display the total number of products */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3>Total Products</h3>
          <p className="text-2xl">{products?.length || 0}</p>
        </div>
        {/* Display the total number of orders */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3>Total Orders</h3>
          <p className="text-2xl">{orders?.length || 0}</p>
        </div>
      </div>
    </div>
  );
};

// Export the Dashboard component as default
export default Dashboard;
