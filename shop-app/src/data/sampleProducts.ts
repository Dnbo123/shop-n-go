import { Product } from '../types';


 export const categories = [
  { id: 'electronics', name: 'Electronics' },
  { id: 'clothing', name: 'Clothing' },
  { id: 'books', name: 'Books' },
  { id: 'home', name: 'Home & Kitchen' },
  { id: 'sports', name: 'Sports' },
  { id: 'beauty', name: 'Beauty' }
 ];
 
 export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 299.99,
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and crystal clear sound quality.',
    image: '/api/placeholder/400/400',
    category: 'electronics',
    featured: true,
    stock: 50,
    rating: 4.5,
    reviews: 128
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking. Water-resistant up to 50m.',
    image: '/api/placeholder/400/400',
    category: 'electronics',
    featured: true,
    stock: 75,
    rating: 4.3,
    reviews: 95
  },
  {
    id: '3',
    name: 'Premium Leather Backpack',
    price: 149.99,
    description: 'Handcrafted genuine leather backpack with laptop compartment and multiple pockets. Perfect for daily use or travel.',
    image: '/api/placeholder/400/400',
    category: 'clothing',
    featured: false,
    stock: 30,
    rating: 4.7,
    reviews: 67
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    price: 249.99,
    description: 'Comfortable office chair with adjustable lumbar support, armrests, and height. Perfect for long working hours.',
    image: '/api/placeholder/400/400',
    category: 'home',
    featured: true,
    stock: 25,
    rating: 4.4,
    reviews: 89
  },
  {
    id: '5',
    name: 'Professional Chef Knife Set',
    price: 179.99,
    description: 'Complete set of high-carbon stainless steel kitchen knives with ergonomic handles and storage block.',
    image: '/api/placeholder/400/400',
    category: 'home',
    featured: false,
    stock: 40,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '6',
    name: 'Yoga Mat Premium',
    price: 59.99,
    description: 'Eco-friendly, non-slip yoga mat with perfect cushioning and carrying strap. Ideal for all types of yoga.',
    image: '/api/placeholder/400/400',
    category: 'sports',
    featured: true,
    stock: 100,
    rating: 4.6,
    reviews: 234
  },
  {
    id: '7',
    name: 'Smart Home Security Camera',
    price: 129.99,
    description: '1080p HD security camera with night vision, two-way audio, and motion detection. Easy smartphone integration.',
    image: '/api/placeholder/400/400',
    category: 'electronics',
    featured: true,
    stock: 45,
    rating: 4.2,
    reviews: 178
  },
  {
    id: '8',
    name: 'Organic Skincare Set',
    price: 89.99,
    description: 'Complete skincare routine with natural and organic ingredients. Includes cleanser, toner, and moisturizer.',
    image: '/api/placeholder/400/400',
    category: 'beauty',
    featured: false,
    stock: 60,
    rating: 4.9,
    reviews: 145
  }
 ];
 


// Helper functions for products
export const getFeaturedProducts = () => sampleProducts.filter(product => product.featured);
export const getProductsByCategory = (category: string) => 
 sampleProducts.filter(product => product.category === category);
export const getProductById = (id: string) => 
 sampleProducts.find(product => product.id === id);