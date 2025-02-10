import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './Dashboard';
import AdminProducts from './Products';

const AdminLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-4">
          <Link to="/admin" className="block hover:text-gray-300">Dashboard</Link>
          <Link to="/admin/products" className="block hover:text-gray-300">Products</Link>
        </nav>
      </div>
      <div className="flex-1 bg-gray-100">
        <Routes>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout