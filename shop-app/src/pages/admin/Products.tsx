import React, { useState } from 'react';
import { Product } from '../../types';
import ProductForm from '../../components/ProductForm';
import { sampleProducts } from '../../data/sampleProducts';

const Products: React.FC = () => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(sampleProducts);

  const handleAddProduct = async (data: Omit<Product, 'id'>): Promise<void> => {
    const newProduct: Product = {
      ...data,
      id: Date.now().toString()
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const handleUpdateProduct = async (data: Product): Promise<void> => {
    setProducts(prev => 
      prev.map(product => 
        product.id === data.id ? data : product
      )
    );
    setEditingProduct(null);
  };

  const handleDeleteProduct = async (id: string): Promise<void> => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Management</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingProduct ? 'Edit Product' : 'Add New Product'}
        </h2>
        <ProductForm
          initialData={editingProduct}
          onSubmit={async (data) => {
            if ('id' in data) {
              await handleUpdateProduct(data as Product);
            } else {
              await handleAddProduct(data);
            }
          }}
          onCancel={() => setEditingProduct(null)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => setEditingProduct(product)}
                className="text-blue-500 hover:text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="text-red-500 hover:text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;