import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './features/bookingSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    auth: authReducer,
  },
});