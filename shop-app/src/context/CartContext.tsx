import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem, Product } from '../types';
import { CartState } from 'interfaces';
import { CartContextType } from 'interfaces';


type CartAction = 
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

  const CartContext = createContext<CartContextType | null>(null);
  const cartReducer = (state: CartState, action: CartAction): CartState => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        
        if (existingItem) {
          return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            total: state.total + action.payload.price
          };
        }
   
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          total: state.total + action.payload.price
        };
      }
   
      case 'REMOVE_ITEM': {
        const item = state.items.find(item => item.id === action.payload);
        if (!item) return state;
   
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          total: state.total - (item.price * item.quantity)
        };
      }
   
      case 'UPDATE_QUANTITY': {
        const item = state.items.find(item => item.id === action.payload.id);
        if (!item) return state;
   
        const updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        );
   
        return {
          ...state,
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
      }
   
      case 'CLEAR_CART':
        return {
          items: [],
          total: 0
        };
   
      default:
        return state;
    }
   };
   
   export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
      items: [],
      total: 0
    });
   
    useEffect(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const { items, total } = JSON.parse(savedCart);
        dispatch({ type: 'CLEAR_CART' });
        items.forEach((item: CartItem) => {
          dispatch({ type: 'ADD_ITEM', payload: item });
        });
      }
    }, []);
   
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);
   
    const addToCart = (product: Product) => {
      dispatch({ type: 'ADD_ITEM', payload: product });
    };
   
    const removeFromCart = (id: string) => {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    };
   
    const updateQuantity = (id: string, quantity: number) => {
      if (quantity > 0) {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
      }
    };
   
    const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' });
    };
   
    return (
      <CartContext.Provider value={{ 
        state, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart 
      }}>
        {children}
      </CartContext.Provider>
    );
   };
   
   export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error('useCart must be used within CartProvider');
    }
    return context;
   };