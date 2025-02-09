import React, { createContext, useContext, useReducer } from 'react';
import { CartItem } from 'interfaces';
import { CartState } from 'interfaces';

/**
 * Context for managing the cart state
 */
const CartContext = createContext<any>(null);

/**
 * Reducer function for updating the cart state
 * @param state current state of the cart
 * @param action action to perform on the cart state
 */
const cartReducer = (state: CartState, action: any) => {
    switch (action.type) {
        /**
         * Add an item to the cart
         * If the item already exists in the cart, increment its quantity
         */
        case 'ADD_ITEM':
            const existingItem = state.items.find((item: CartItem) => item.id === action.payload.id);
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
        /**
         * Remove an item from the cart
         * If the item does not exist in the cart, no action is taken
         */
        case 'REMOVE_ITEM':
            const item = state.items.find(item => item.id !== action.payload),
              return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
                total: state.total - (item ? item.price * item.quantity : 0)
              };
        default:
            return state;
    }
};

/**
 * Provider component for the cart context
 * @param children children components to render
 */
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });
  
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

