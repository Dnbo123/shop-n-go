import { ReactNode } from 'react';

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
    user: any;
    login: (credentials: any) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
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
  