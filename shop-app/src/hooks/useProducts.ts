// src/services/api.ts
import axios from 'axios';
import { Product } from '../types';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products');
    return response.data.map((item: any) => ({
      id: item.id.toString(),
      name: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
      stock: 100,
      rating: item.rating.rate,
      reviews: item.rating.count,
      featured: false
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  try {
    const response = await api.post('/products', {
      title: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category
    });
    return {
      id: response.data.id.toString(),
      name: response.data.title,
      price: response.data.price,
      description: response.data.description,
      image: response.data.image,
      category: response.data.category,
      stock: 100,
      rating: 0,
      reviews: 0,
      featured: false
    };
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  try {
    const response = await api.put(`/products/${id}`, {
      title: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category
    });
    return {
      id: response.data.id.toString(),
      name: response.data.title,
      price: response.data.price,
      description: response.data.description,
      image: response.data.image,
      category: response.data.category,
      stock: 100,
      rating: response.data.rating?.rate || 0,
      reviews: response.data.rating?.count || 0,
      featured: false
    };
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProduct = async (id: string): Promise<void> => {
  try {
    await api.delete(`/products/${id}`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};