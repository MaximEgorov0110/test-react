import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProducts, toggleProductLike, getLikedProducts, deleteProductById, createProduct } from '../api';
import type { CreateProductData, Product, ProductsState } from '../types/product';

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

export const removeProduct =  createAsyncThunk(
  'products/deleteProduct',
  ({id}: {id: number}) => {
    return deleteProductById(id)
      .then((data) => data)
      .catch((error) => {
        console.log(id)
        alert('ошибка')
        throw error;
      });
  }
)

export const createNewProduct = createAsyncThunk(
  'products/createProduct',
  (productData: CreateProductData) => {
    return createProduct(productData)
      .then((data) => data)
      .catch((error) => {
        console.log('Ошибка создания товара:', error);
        alert('Ошибка при создании товара');
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
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.list = state.list.filter(product => product.id !== action.payload.id);
      })
      .addCase(removeProduct.rejected, (state) => {
        state.error = 'Ошибка при удалении товара';
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        // Добавляем новый товар в начало списка
        state.list.unshift(action.payload);
      })
      .addCase(createNewProduct.rejected, (state) => {
        state.error = 'Ошибка при создании товара';
      });
  },
});

export const { toggleFilter, clearError } = productsSlice.actions;

// Экспорт редюсера
export default productsSlice.reducer;
