import { nanoid } from '@reduxjs/toolkit';

// Function to add guest.
const add = (state, action) => {
    // Creating uniques id for each guest.
    const id = nanoid();
    state.value = [...state.value, { ...action.payload, id }];
};

// Function to edit guest.
const edit = (state, action) => {
    // Getting id of guest which is edited.
    const id = action.payload.id;
    const updatedGuest = [...state.value];

    // Getting index of the guest using its id, which is to be updated.
    const index = updatedGuest.findIndex(guest => guest.id === id);
    updatedGuest[index] = action.payload;
    state.value = updatedGuest;
};

// Function to delete guest.
const remove = (state, action) => {
    // Getting id of guest which is to be removed.
    const id = action.payload;
    let updatedGuest = state.value;
    updatedGuest = updatedGuest.filter(guest => guest.id !== id);
    state.value = updatedGuest;
};

export { add, edit, remove };
