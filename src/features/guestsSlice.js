import { createSlice } from '@reduxjs/toolkit';

export const guestsSlice = createSlice({
  name: 'guests',
  initialState: [],
  reducers: {
    addGuest: (state, action) => {
      state.push(action.payload);
    },
    editGuest: (state, action) => {
      const { index, guest } = action.payload;
      state[index] = guest;
    },
    deleteGuest: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addGuest, editGuest, deleteGuest } = guestsSlice.actions;
export default guestsSlice.reducer;
