import { createSlice } from '@reduxjs/toolkit';
import { add, edit, remove } from '../reducers/guestReducers.js';

const initialState = {
  value: JSON.parse(localStorage.getItem('guest')) || [],
};

export const guestSlice = createSlice({
  name: 'guest',
  initialState,
  reducers: {
    addGuest: add,
    editGuest: edit,
    deleteGuest: remove,
  },
});

export const { addGuest, editGuest, deleteGuest } = guestSlice.actions;

export default guestSlice.reducer;
