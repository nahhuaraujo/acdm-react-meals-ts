import { createSlice } from '@reduxjs/toolkit';
import { IMeal } from '../../models';

export interface CartState {
  meals: IMeal[];
  totalMeals: number;
  finalPrice: number;
}

interface CartAction {
  type: string;
  payload: IMeal;
}

const initialState: CartState = {
  meals: [],
  totalMeals: 0,
  finalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addMeal: (state: CartState, action: CartAction) => {
      const foundMeal = state.meals.find(meal => meal.id === action.payload.id);
      if (foundMeal) {
        return {
          ...state,
          meals: state.meals.map(meal => {
            if (meal.id === action.payload.id) {
              return {
                ...meal,
                amount: meal.amount + action.payload.amount,
              };
            } else {
              return meal;
            }
          }),
          finalPrice: state.finalPrice + action.payload.price * action.payload.amount,
          totalMeals: state.totalMeals + action.payload.amount,
        };
      } else {
        return {
          ...state,
          meals: [...state.meals, action.payload],
          finalPrice: state.finalPrice + action.payload.price * action.payload.amount,
          totalMeals: state.totalMeals + action.payload.amount,
        };
      }
    },
    decreaseMealAmount: (state, action) => {
      const foundMeal = state.meals.find(meal => meal.id === action.payload.id);
      if (foundMeal && foundMeal.amount > 1) {
        return {
          ...state,
          meals: state.meals.map(meal => {
            if (meal.id === action.payload.id) {
              return {
                ...meal,
                amount: meal.amount - 1,
              };
            } else {
              return meal;
            }
          }),
          finalPrice: state.finalPrice - action.payload.price,
          totalMeals: state.totalMeals - 1,
        };
      } else {
        return {
          ...state,
          meals: state.meals.filter(meal => meal.id !== action.payload.id),
          finalPrice: state.finalPrice - action.payload.price,
          totalMeals: state.totalMeals - 1,
        };
      }
    },
    increaseMealAmount: (state, action) => {
      const foundMeal = state.meals.find(meal => meal.id === action.payload.id);
      if (foundMeal) {
        return {
          ...state,
          meals: state.meals.map(meal => {
            if (meal.id === action.payload.id) {
              return {
                ...meal,
                amount: meal.amount + 1,
              };
            } else {
              return meal;
            }
          }),
          finalPrice: state.finalPrice + action.payload.price,
          totalMeals: state.totalMeals + 1,
        };
      } else {
        return state;
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
