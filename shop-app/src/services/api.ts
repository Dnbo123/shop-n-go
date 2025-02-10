import axios from 'axios';
import { ApiProduct, mapApiProductToProduct } from '../types/api.types';
import { Product } from '../types';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get<ApiProduct[]>('/products');
  return response.data.map(mapApiProductToProduct);
};

export const fetchProduct = async (id: string): Promise<Product> => {
  const response = await api.get<ApiProduct>(`/products/${id}`);
  return mapApiProductToProduct(response.data);
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const response = await api.post<ApiProduct>('/products', {
    title: product.name,
    price: product.price,
    description: product.description,
    image: product.image,
    category: product.category
  });
  return mapApiProductToProduct(response.data);
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const response = await api.put<ApiProduct>(`/products/${id}`, {
    title: product.name,
    price: product.price,
    description: product.description,
    image: product.image,
    category: product.category
  });
  return mapApiProductToProduct(response.data);
};

export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete(`/products/${id}`);
};