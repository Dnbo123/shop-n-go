import { useQuery } from '@tanstack/react-query';

export const useProducts = (id: string) => {
    return useQuery(['product', id], () => fetchProduct(id));
}
