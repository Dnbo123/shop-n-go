import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { Product } from 'types';

// Create an axios instance with a base URL and default headers
const api = axios.create({
  // Set the base URL for the API. If the environment variable REACT_APP_API_URL is set,
  // use that. Otherwise, use 'http://localhost:3001' as the default.
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001',
  // Set the default content type to application/json
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add an interceptor to add an Authorization header with a Bearer token
// to all requests if a token is present in local storage
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      // Add an Authorization header with the token
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Reject the promise if there is an error
    return Promise.reject(error);
  }
);

// Add an interceptor to handle 401 responses by removing the token from
// local storage and redirecting to the login page
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Remove the token from local storage
      localStorage.removeItem('token');
      // Redirect to the login page
      window.location.href = '/login';
    }
    // Reject the promise if there is an error
    return Promise.reject(error);
  }
);

// API functions
/**
 * Fetch all products from the API
 * @returns A promise that resolves to an array of Product objects
 */
export const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

/**
 * Fetch a single product by its ID from the API
 * @param id The ID of the product to fetch
 * @returns A promise that resolves to a Product object
 */
export const fetchProduct = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

/**
 * Create a new product in the API
 * @param product The product data to create
 * @returns A promise that resolves to the created Product object
 */
export const createProduct = async (product: Omit<Product, 'id'>) => {
  const response = await api.post('/products', product);
  return response.data;
};

/**
 * Update an existing product in the API
 * @param id The ID of the product to update
 * @param product The product data to update
 * @returns A promise that resolves to the updated Product object
 */
export const updateProduct = async (id: string, product: Partial<Product>) => {
  const response = await api.put(`/products/${id}`, product);
  return response.data;
};

/**
 * Delete a product from the API
 * @param id The ID of the product to delete
 */
export const deleteProduct = async (id: string) => {
  await api.delete(`/products/${id}`);
};

export default api;
