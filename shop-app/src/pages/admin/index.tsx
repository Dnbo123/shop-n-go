import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Products } from './Products';

export const Admin = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default Admin;