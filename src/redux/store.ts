import { configureStore } from '@reduxjs/toolkit';
import { IMeal } from '../models';
import { cartReducer } from './slices/cart-slice';

export interface IStore {
  cart: {
    meals: IMeal[];
    totalMeals: number;
    finalPrice: number;
  };
}

const store = configureStore<IStore>({
  reducer: { cart: cartReducer },
});

export default store;
