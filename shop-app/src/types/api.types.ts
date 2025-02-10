import { Product } from "types";

export interface ApiProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  // Transform API product to our app's Product type
  export const mapApiProductToProduct = (apiProduct: ApiProduct): Product => ({
    id: apiProduct.id.toString(),
    name: apiProduct.title,
    price: apiProduct.price,
    description: apiProduct.description,
    image: apiProduct.image,
    category: apiProduct.category,
    stock: 100, // Default value as API doesn't provide stock
    rating: apiProduct.rating.rate,
    reviews: apiProduct.rating.count,
    featured: false
  });
  