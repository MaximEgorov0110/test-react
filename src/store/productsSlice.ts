import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, toggleProductLike, getLikedProducts } from '../api';
import type { Product, ProductsState } from '../types/product';

const initialState: ProductsState = {
  list: [],
  isLoading: false,
  error: null,
  showOnlyLiked: false,
};

// Получение товаров
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  (showOnlyLiked: boolean) => {
    const apiResponse = showOnlyLiked ? getLikedProducts() : getProducts();

    return apiResponse
      .then((data) => data)
      .catch((error) => {
        if (showOnlyLiked && error.response?.status === 404) {
          return [];
        }
        throw error;
      });
  }
);

// Переключение лайка
export const toggleLike = createAsyncThunk(
  'products/toggleLike',
  ({ id, currentIsLiked }: { id: number; currentIsLiked: boolean }) => {
    return toggleProductLike(id, currentIsLiked)
      .then((data) => data)
      .catch((error) => {
        throw error;
      });
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFilter: (state) => {
      state.showOnlyLiked = !state.showOnlyLiked;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Ошибка загрузки';
      })
      .addCase(toggleLike.fulfilled, (state, action) => {
        const index = state.list.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
      });
  },
});

export const { toggleFilter, clearError } = productsSlice.actions;

// Экспорт редюсера
export default productsSlice.reducer;
