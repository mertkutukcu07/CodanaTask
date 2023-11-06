import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import * as api from '../services/api';

export interface RootState {
  products: {
    data: Product[];
    loading: boolean;
    error: string;
  };
}
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

interface ProductsState {
  data: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null,
};
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => {
    try {
      const response = await api.getAllProducts();
      return response.data as Product[];
    } catch (error) {
      throw error;
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
