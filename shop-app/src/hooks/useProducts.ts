import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Product } from '../types';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../services/api';

export const useProducts = () => {
  const queryClient = useQueryClient();

  const productsQuery = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const createMutation = useMutation({
    mutationFn: (newProduct: Omit<Product, 'id'>) => createProduct(newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, product }: { id: string; product: Partial<Product> }) =>
      updateProduct(id, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    }
  });

  return {
    products: productsQuery.data || [],
    isLoading: productsQuery.isLoading,
    error: productsQuery.error,
    createProduct: createMutation.mutate,
    updateProduct: updateMutation.mutate,
    deleteProduct: deleteMutation.mutate
  };
};
