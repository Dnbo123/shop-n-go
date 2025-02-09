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
  