import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './slices/cart-slice';

const store = configureStore({
  reducer: cartReducer,
});

export default store;
