import axios from "axios";
import type { AxiosResponse } from "axios"
import type { Product, CreateProductData } from "../types/product";

const API = 'https://68236bac65ba05803396af5f.mockapi.io'

export const responseApi = async<ResponseData, Payload>(
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  url: string,
  payload?: {}
): Promise<ResponseData> => {
  const response = await (axios[method](API + url, payload) as Promise<AxiosResponse<ResponseData, Payload, {}>>)
  return response.data
}
export const getProducts = () => {
  return responseApi<Product[], null>('get', '/products')
}

export const getLikedProducts = () => {
  return responseApi<Product[], null>('get', '/products?isLiked=true')
}

export const getProductById = (id: number) => {
  return responseApi<Product, null>('get', `/products/${id}`);
}

export const createProduct = (productData: CreateProductData) => {
  return responseApi<Product, CreateProductData>('post', '/products', productData)
}

export const toggleProductLike = (id: number, isLiked: boolean) => {
  return responseApi<Product, { isLiked: boolean }>('put', `/products/${id}`, {
    isLiked: !isLiked
  });
}