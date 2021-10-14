import { configureStore } from '@reduxjs/toolkit';
import loadReducer from '../features/loadingSlice'
import cartReducer from '../features/cartSlice'

export const store = configureStore({
  reducer: {
    load: loadReducer,
    userCart: cartReducer
  },
});
