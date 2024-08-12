import { configureStore } from '@reduxjs/toolkit';
import guest from '../features/guestsSlice.js';
import localStorageMiddleware from '../middlewares/localStorageMiddleware.js';

const store = configureStore({
  reducer: {
    guest
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
