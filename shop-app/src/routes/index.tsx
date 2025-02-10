import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
  );
};

export default AppRoutes;
