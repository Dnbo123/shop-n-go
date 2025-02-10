import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '../services/api';

export const useProducts = (id: string) => {
    return useQuery(['product', id], () => fetchProduct(id));
}
