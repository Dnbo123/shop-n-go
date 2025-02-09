import { ReactNode } from 'react';
import { User } from '../types';

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
    login: (email: string, password: string) => promise<void>;
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
    onSubmit: (data: any) => void;
  }

  export interface ProtectedRouteProps {
    children: React.ReactNode;
    requireAdmin?: boolean;
  }

  