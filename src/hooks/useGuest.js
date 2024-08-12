import { useDispatch, useSelector } from 'react-redux';
import { addGuest, deleteGuest, editGuest } from '../app/features/guestsSlice.js';

export default function useGuest() {

    // Getting guests from store.
    const guests = useSelector(state => state.guest.value);

    const dispatch = useDispatch();

    // Function to add guest ticket.
    const addGuestTicket = (guest) => {
        dispatch(addGuest(guest));
    };
    
    // Function to remove guest ticket.
    const removeGuestTicket = (id) => {
        dispatch(deleteGuest(id));
    };
    
    // Function to edit guest ticket.
    const editGuestTicket = (guest) => {
        dispatch(editGuest(guest));
    };

    return {
        guests,
        addGuestTicket,
        removeGuestTicket,
        editGuestTicket,
    };
};
