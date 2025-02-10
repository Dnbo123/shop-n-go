import React, { useState, useEffect } from 'react';
import { ProductFormProps } from 'interfaces';

// Define the ProductForm functional component with props for initial data and submission handler
const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit }) => {

    // Set up state for form data, initializing with either provided initial data or default values
    const [formData, setFormData] = useState({
      name: '',
      price: '',
      description: '',
      image: '',
      category: ''
    });

    // Update form data when initial data changes
    useEffect(() => {
        if (initialData) {
          setFormData(initialData);
        }
      }, [initialData]);
     
  
    // Handle form submission by preventing default behavior and invoking onSubmit with form data
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      await onSubmit(formData);
      
    const onSuccess = () => {
   onSuccess?.();
   if (!initialData) {
     setFormData({
       name: '',
       price: '',
       description: '',
       image: '',
       category: ''
     });
   }
    };
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
          
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded"
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full p-2 border rounded"
          value={formData.image}
          onChange={e => setFormData({ ...formData, image: e.target.value })}
          
        />
        <input 
           type="text"
           placeholder="Category"
           value={formData.category}
           onChange={e => setFormData({ ...formData, category: e.target.value })}
           className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          {initialData ? 'Update' : 'Create'} Product
        </button>
      </form>
    );
};

export default ProductForm;
