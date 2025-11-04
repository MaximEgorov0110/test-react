export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  isLiked: boolean;
}

export interface CreateProductData {
  title: string;
  description: string;
  price: number;
  image: string;
  isLiked?: boolean;
}

export interface ProductsState {
  list: Product[];
  isLoading: boolean;
  likedProductIds: number[];
}