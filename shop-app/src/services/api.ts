import axios from 'axios';
import { Product, User, CartItem, Cart } from '../types';

export const api = axios.create({
 baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001'
});

export const fetchProducts = async (): Promise<Product[]> => {
 const { data } = await api.get('/products');
 return data;
};

export const fetchProduct = async (id: string): Promise<Product> => {
 const { data } = await api.get(`/products/${id}`);
 return data;
};

/**
 * Fetch a list of all orders from the API.
 */
export const fetchOrders = async (): Promise<Cart[]> => {
    const { data } = await api.get('/orders');
    return data;
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
 const { data } = await api.post('/products', product);
 return data;
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
 const { data } = await api.put(`/products/${id}`, product);
 return data;
};

export const deleteProduct = async (id: string): Promise<void> => {
 await api.delete(`/products/${id}`);
};

export const login = async (email: string, password: string): Promise<User> => {
 const { data } = await api.post('/auth/login', { email, password });
 return data;
};