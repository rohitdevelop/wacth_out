export type Category = "men" | "women" | "kid" | "sports";

export interface Product {
  name: string;
  description: string;
  productImage: string[];
  price: number;
  category: Category;
  rating: number;
  stock: number;
  isActive: boolean;
}