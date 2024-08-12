import { configureStore } from '@reduxjs/toolkit';
import guest from '../features/guestsSlice.js';

const store = configureStore({
  reducer: {
    guest
  },
});

export default store;
