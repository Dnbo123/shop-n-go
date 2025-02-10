import { ReactNode } from 'react';
import { User } from '../types';
import { Product } from '../types';
import { CartItem } from '../types';


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
   product: Product;
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
    initialData?: Product | null;
    onSubmit: (data: Product | Omit<Product, 'id'>) => Promise<void>;
    onCancel?:() => void;
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
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
   }
  
  

  
  