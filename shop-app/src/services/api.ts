import axios from 'axios';
import { Product, User, CartItem, Cart } from '../types';

export const api = axios.create({
 /**
  * Set the base URL for the API. If the environment variable REACT_APP_API_URL is set,
  * use that. Otherwise, use 'http://localhost:3001' as the default.
  */
 baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001'
});

/**
 * Fetch a list of all products from the API.
 * @returns A promise that resolves to an array of Product objects.
 */
export const fetchProducts = async (): Promise<Product[]> => {
 const { data } = await api.get('/products');
 return data;
};

/**
 * Fetch a single product from the API by its ID.
 * @param id The ID of the product to fetch.
 * @returns A promise that resolves to a Product object.
 */
export const fetchProduct = async (id: string): Promise<Product> => {
 const { data } = await api.get(`/products/${id}`);
 return data;
};

/**
 * Fetch a list of all orders from the API.
 * @returns A promise that resolves to an array of Cart objects.
 */
export const fetchOrders = async (): Promise<Cart[]> => {
    const { data } = await api.get('/orders');
    return data;
};

/**
 * Create a new product in the database.
 * @param product The product data to create.
 * @returns A promise that resolves to the newly created Product object.
 */
export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
 const { data } = await api.post('/products', product);
 return data;
};

/**
 * Update an existing product in the database.
 * @param id The ID of the product to update.
 * @param product The product data to update.
 * @returns A promise that resolves to the updated Product object.
 */
export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
 const { data } = await api.put(`/products/${id}`, product);
 return data;
};

/**
 * Delete a product from the database.
 * @param id The ID of the product to delete.
 */
export const deleteProduct = async (id: string): Promise<void> => {
 await api.delete(`/products/${id}`);
};

/**
 * Log in a user and return their user data.
 * @param email The email address of the user to log in.
 * @param password The password of the user to log in.
 * @returns A promise that resolves to the User object of the logged in user.
 */
export const login = async (email: string, password: string): Promise<User> => {
 const { data } = await api.post('/auth/login', { email, password });
 return data;
};
