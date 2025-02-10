import React, { createContext, useContext, useReducer } from 'react';
import { ProductState } from 'interfaces';
import { Product } from '../types';

/**
 * Types of actions that can be performed on the product state
 */
type ProductAction =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: string }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string };

/**
 * Reducer function for updating the product state
 * @param state current state of the products
 * @param action action to perform on the product state
 */
const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      // Set the products array to the payload and set loading to false
      return { ...state, products: action.payload, loading: false };
    case 'ADD_PRODUCT':
      // Add the new product to the products array
      return { ...state, products: [...state.products, action.payload] };
    case 'UPDATE_PRODUCT':
      // Update the product in the products array
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case 'DELETE_PRODUCT':
      // Remove the product from the products array
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };
    case 'SET_LOADING':
      // Set the loading state to the payload
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      // Set the error state to the payload and set loading to false
      return { ...state, error: action.payload, loading: false };
    default:
      // Return the current state if no action is matched
      return state;
  }
};

/**
 * Context for the product state and dispatch function
 */
const ProductContext = createContext<{
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}>({
  state: { products: [], loading: false, error: null },
  dispatch: () => null,
});

/**
 * Provider component for the product context
 * @param children The children components to render
 */
export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Initialize the product state and dispatch function
  const [state, dispatch] = useReducer(productReducer, {
    products: [],
    loading: false,
    error: null,
  });

  // Wrap the children components with the product context
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

/**
 * Hook to access the product context
 */
export const useProduct = () => useContext(ProductContext);

export default ProductContext;
