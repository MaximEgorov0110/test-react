import axios from "axios";
import type { AxiosResponse } from "axios"
import type { Product, CreateProductData } from "../types/product";

const API = 'https://68236bac65ba05803396af5f.mockapi.io'

export const responseApi = async<ResponseData, Payload>(method: 'get' | 'post' | 'put' | 'delete' | 'patch', url: string, payload?: {}): Promise<ResponseData> => {
  // responseApi.myInterseptor()
  const response = await (axios[method](API + url, payload) as Promise<AxiosResponse<ResponseData, Payload, {}>>)
  return response.data
}
// responseApi.myInterseptor = () => {
// }

export const getProducts = () => {
  return responseApi<Product[], null>('get', '/products')
}

export const getProductById = (id: number) => {
  return responseApi<Product, null>('get', `/products/${id}`);
}

export const createProduct = () => {
  return responseApi<Product, CreateProductData>('post', '/products')
}

export const toggleProductLike = (id: number) => {
  return responseApi<Product, null>('patch', `/products/${id}/like`);
}