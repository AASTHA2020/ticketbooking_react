import { configureStore } from '@reduxjs/toolkit';
import guestsReducer from '../features/guestsSlice';

export const store = configureStore({
  reducer: {
    guests: guestsReducer,
  },
});
