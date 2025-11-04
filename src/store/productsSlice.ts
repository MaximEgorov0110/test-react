import { createSlice } from "@reduxjs/toolkit";
import type { ProductsState, Product} from "../types/product"

const initialState = {
  list: [],
  isLoading: false,
  likedProductIds: [] as number[]
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    setProducts(state, action) {
      state.list = action.payload;
    },
    setIsProductLoading(state, action) {
      state.isLoading = action.payload;
    },
    toggleProductLike(state, action) {
      const productId = action.payload;
      const index = state.likedProductIds.indexOf(productId);

      if (index === -1) {
        state.likedProductIds.push(productId);
      } else {
        state.likedProductIds.splice(index, 1);
      }

      // const product: Product = state.list.find(item => item.id === productId);
      // if (product) {
      //   product.isLiked = !product.isLiked;
      // }
    },
  }
});

// Селекторы
export const getProductsList = (state:  { products: ProductsState }) => state.products.list;
export const getIsLoading = (state:  { products: ProductsState }) => state.products.isLoading;
export const getLikedProductIds = (state: { products: ProductsState }) => state.products.likedProductIds;

// Экспорт действий
export const { setProducts, setIsProductLoading } = productsSlice.actions;

// Экспорт редюсера
export default productsSlice.reducer;
