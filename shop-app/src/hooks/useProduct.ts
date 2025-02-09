import { useQuery } from '@tanstack/react-query';

export const useProduct = (id: string) => {
    return useQuery(['product', id], () => fetchProduct(id));
}
