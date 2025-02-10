import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductFormProps } from 'interfaces';

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onSubmit, onCancel }) => {
  // Initialize form data state with default values
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    category: '',
    stock: '',
    rating: 0,
    reviews: 0,
    featured: false
  });

  // Effect to populate form data when initialData is provided
  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        price: initialData.price.toString(),
        description: initialData.description,
        image: initialData.image,
        category: initialData.category,
        stock: initialData.stock.toString(),
        rating: initialData.rating,
        reviews: initialData.reviews,
        featured: initialData.featured
      });
    }
  }, [initialData]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Prepare data for submission
      const submitData = {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        rating: Number(formData.rating),
        reviews: Number(formData.reviews)
      };
      
      // Call onSubmit with the appropriate data
      await onSubmit(initialData ? { ...submitData, id: initialData.id } : submitData);

      // Reset form data if adding a new product
      if (!initialData) {
        setFormData({
          name: '',
          price: '',
          description: '',
          image: '',
          category: '',
          stock: '',
          rating: 0,
          reviews: 0,
          featured: false
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* Price input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          value={formData.price}
          onChange={e => setFormData({ ...formData, price: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          step="0.01"
          min="0"
          required
        />
      </div>

      {/* Description textarea */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          required
        />
      </div>

      {/* Image URL input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Image URL</label>
        <input
          type="url"
          value={formData.image}
          onChange={e => setFormData({ ...formData, image: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* Category input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <input
          type="text"
          value={formData.category}
          onChange={e => setFormData({ ...formData, category: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      {/* Stock input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Stock</label>
        <input
          type="number"
          value={formData.stock}
          onChange={e => setFormData({ ...formData, stock: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          min="0"
          required
        />
      </div>

      {/* Rating input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Rating</label>
        <input
          type="number"
          value={formData.rating}
          onChange={e => setFormData({ ...formData, rating: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          min="0"
          max="5"
          step="0.1"
        />
      </div>

      {/* Reviews Count input field */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Reviews Count</label>
        <input
          type="number"
          value={formData.reviews}
          onChange={e => setFormData({ ...formData, reviews: Number(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          min="0"
        />
      </div>

      {/* Featured Product checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={formData.featured}
          onChange={e => setFormData({ ...formData, featured: e.target.checked })}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label className="ml-2 block text-sm text-gray-900">Featured Product</label>
      </div>

      {/* Form actions: Cancel and Submit buttons */}
      <div className="flex justify-end space-x-4 pt-4">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {initialData ? 'Update' : 'Add'} Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
