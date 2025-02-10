import axios from 'axios';
import { Product } from '../types';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com'
});

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await api.get('/products?limit=20');
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