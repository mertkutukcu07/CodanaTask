import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../productsSlice';
const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export default store;
