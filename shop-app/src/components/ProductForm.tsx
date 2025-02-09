import React, { useState } from 'react';
import { ProductFormProps } from 'interfaces';

// Define the ProductForm functional component with props for initial data and submission handler
const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit }) => {
    // Set up state for form data, initializing with either provided initial data or default values
    const [formData, setFormData] = useState(initialData || {
      name: '',
      price: '',
      description: '',
      image: ''
    });
  
    // Handle form submission by preventing default behavior and invoking onSubmit with form data
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData);
    };
  
    // Render the form with controlled input fields for product details
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full p-2 border rounded"
          value={formData.price}
          onChange={e => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <input
          type="url"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={formData.image}
          onChange={e => setFormData({ ...formData, image: e.target.value })}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {initialData ? 'Update Product' : 'Add Product'}
        </button>
      </form>
    );
};

export default ProductForm;
