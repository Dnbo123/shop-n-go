import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../../services/api';
import ProductForm from 'components/ProductForm';
import { Product } from '../../types';

// The Products page component.
// This component displays a list of products and allows the user to create, edit, and delete products.
export const Products = () => {
  // State to keep track of which product is currently being edited.
  // If null, no product is being edited.
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // The QueryClient instance that is used to invalidate queries when data changes.
  const queryClient = useQueryClient();

  // The query to fetch all products from the API.
  // The query key is 'products', and the query function is fetchProducts.
  const { data: products } = useQuery(['products'], fetchProducts);

  // The mutation to create a new product.
  // The mutation function is createProduct, and the onSuccess callback is used to invalidate the 'products' query.
  const createMutation = useMutation(createProduct, {
    onSuccess: () => queryClient.invalidateQueries(['products'])
  });

  // The mutation to update an existing product.
  // The mutation function is updateProduct, and the onSuccess callback is used to invalidate the 'products' query.
  const updateMutation = useMutation(
    // The mutation function takes a product object as an argument and updates the product with the given ID.
    (product: Product) => updateProduct(product.id, product),
    { onSuccess: () => queryClient.invalidateQueries(['products']) }
  );

  // The mutation to delete a product.
  // The mutation function is deleteProduct, and the onSuccess callback is used to invalidate the 'products' query.
  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries(['products'])
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      {/* The ProductForm component is used to create or edit a product. */}
      <ProductForm
        // The onSubmit function is called when the form is submitted.
        // If the form is being used to edit a product, the updateMutation is called.
        // If the form is being used to create a new product, the createMutation is called.
        onSubmit={editingProduct ? 
          async (data: any) => {
            await updateMutation.mutate(data);
          } : 
          async (data: any) => {
            await createMutation.mutate(data);
          }
        }
        // The initial data for the form is the product that is being edited.
        initialData={editingProduct}
        // When the form is submitted successfully, the editingProduct state is set to null.
        onSuccess={() => setEditingProduct(null)}
      />
      {/* The list of products is displayed below the form. */}
      <div className="mt-8">
        {products?.map(product => (
          <div key={product.id} className="flex items-center justify-between border-b py-4">
            {/* The product name and price are displayed in the list. */}
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
            {/* The edit and delete buttons are displayed next to each product. */}
            <div>
              {/* The edit button sets the editingProduct state to the current product. */}
              <button
                onClick={() => setEditingProduct(product)}
                className="text-blue-500 mr-4"
              >
                Edit
              </button>
              {/* The delete button calls the deleteMutation with the product ID as an argument. */}
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
