import { ReactNode } from 'react';
import { User } from '../types';
import { Product } from '../types';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
  
 export interface CartState {
    items: CartItem[];
    total: number;
  }

  export interface AuthContextType {
    user: User | null; 
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}
  export interface ProductCardProps {
    product: {
      id: string;
      name: string;
      price: number;
      description: string;
      image: string;
    };
  }

  export interface Props {
    children: ReactNode;
  }
  
  export interface State {
    hasError: boolean;
    error: Error | null;
  }

  export interface Testimonial {
    id: number;
    name: string;
    rating: number;
    comment: string;
  }
  
  export interface ProductFormProps {
    initialData?: any;
    onSubmit: (data: any) => Promise<void>;
    onSuccess?: () => void;
  }

  export interface ProtectedRouteProps {
    children: React.ReactNode;
    requireAdmin?: boolean;
  }

  export interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
  }

  export interface CartContextType {
    state: CartState;
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
  }
  

  
  