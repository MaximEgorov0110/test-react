import type { Product, CreateProductData } from "../types/product";
import axios from "axios";

const API = 'https://68236bac65ba05803396af5f.mockapi.io'

export const responseApi = <ResponseData, Payload>(
  method: 'get' | 'post' | 'put' | 'delete', 
  url: string, 
  payload?: {}
): Promise<ResponseData> => {
  return axios[method](API + url, payload)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export const getProducts = (): Promise<Product[]> => {
  return responseApi<Product[], null>('get', '/products');
}

export const getLikedProducts = (): Promise<Product[]> => {
  return responseApi<Product[], null>('get', '/products?isLiked=true');
}

export const getProductById = (id: number): Promise<Product> => {
  return responseApi<Product, null>('get', `/products/${id}`);
}

export const deleteProductById = (id: number): Promise<Product> => {
  return responseApi<Product, null>('delete', `/products/${id}`);
}

export const createProduct = (productData: CreateProductData): Promise<Product> => {
  return responseApi<Product, CreateProductData>('post', '/products', productData);
}

export const toggleProductLike = (id: number, isLiked: boolean): Promise<Product> => {
  return responseApi<Product, { isLiked: boolean }>('put', `/products/${id}`, { 
    isLiked: !isLiked 
  });
}