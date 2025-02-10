export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
  featured: boolean;
}
  
  export interface CartItem extends Product {
    quantity: number;
  }
  // tech-band-originals/shop-app/src/interfaces/index.tsx

  export interface User {
    id: string;
    email: string;
    role: 'user' | 'admin';
  }

  export interface Cart {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
  }