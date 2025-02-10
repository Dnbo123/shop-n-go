import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../../services/api';
import ProductForm from 'components/ProductForm';
import { Product } from '../../types';

export const Products = () => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const queryClient = useQueryClient();
  const { data: products } = useQuery(['products'], fetchProducts);

  const createMutation = useMutation(createProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    }
  });

  const updateMutation = useMutation(
    (data: Product) => updateProduct(data.id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['products']);
      }
    }
  );

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries(['products']);
    }
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <ProductForm
    onSubmit={editingProduct ? 
      async (data) => {
        await updateMutation.mutateAsync(data);
      } :
      async (data) => {
        await createMutation.mutateAsync(data);
      }
    }
        initialData={editingProduct}
        onSuccess={() => setEditingProduct(null)}
      />
      <div className="mt-8">
        {products?.map(product => (
          <div key={product.id} className="flex items-center justify-between border-b py-4">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <div>
              <button
                onClick={() => setEditingProduct(product)}
                className="text-blue-500 mr-4"
              >
                Edit
              </button>
              <button
                onClick={() => deleteMutation.mutate(product.id)}
                className="text-red-500"
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