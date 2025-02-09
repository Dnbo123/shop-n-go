import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem } from 'interfaces';
import { CartState } from 'interfaces';

/**
 * Reducer function for updating the cart state
 * @param state current state of the cart
 * @param action action to perform on the cart state
 */

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } };


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
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          total: state.total - (item ? item.price * item.quantity : 0)
        };
      }
      case 'UPDATE_QUANTITY': {
        const item = state.items.find(item => item.id === action.payload.id);
        if (!item) return state;
        const quantityDiff = action.payload.quantity - item.quantity;
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
          total: state.total + item.price * quantityDiff
        };
      }
      default:
        return state;
    }
  };

  const CartContext = createContext<{
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
  } | null>(null);

/**
 * Provider component for the cart context
 * @param children children components to render
 */
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, {
      items: [],
      total: 0
    });
  
    useEffect(() => {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const { items, total } = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: { items, total } });
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);
  
    return (
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    );
  };
  /**
   * Hook for accessing the cart state and dispatch function
   */
  export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
  }

  export default CartContext;

