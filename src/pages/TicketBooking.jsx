import React, { useState, useEffect, useCallback } from 'react';
import styles from '../styles/TicketBooking.module.css'; // Import the CSS module
import useGuest from '../hooks/useGuest.js';
import Ticket from '../components/Ticket.jsx';

const TicketBooking = () => {

  // Getting all guests and functions to manage them.
  const { guests, addGuestTicket, editGuestTicket, removeGuestTicket } = useGuest();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [price, setPrice] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({}); // To store validation errors

  // Function to calculate price based on age
  const calculatePrice = useCallback((age) => {
    if (age <= 2) return 0; // Free for age <= 2
    if (age < 18) return 100; // Child price
    if (age < 60) return 500; // Adult price
    return 300; // Senior price
  }, [age]);

  // Validate fields
  const validate = useCallback(() => {
    const newErrors = {};
    if (!name || !/^(?=.*[a-zA-Z].{2,})[a-zA-Z0-9]*$/.test(name)) {
      newErrors.name = 'Name must include at least 2 letters and may contain numbers';
    }
    if (!age || age <= 0 || age > 90) {
      newErrors.age = 'Must be a valid age';
    }
    if (!name || !age) {
      newErrors.general = 'All fields are mandatory';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [name, age, setErrors]);

  // Function to handle guest.
  const handleGuest = useCallback(() => {

    // If validation fails, don't do anything.
    if (!validate()) return;

    // Object for guest with necessary details.
    const guest = {
      name, age, price,
    };

    // If there is editing id, then edit the guest, else add new guest.
    if (editingId) {
      editGuestTicket({ ...guest, id: editingId });
    } else {
      addGuestTicket(guest);
    };

    // Reset all the input fields.
    setName('');
    setAge('');
    setPrice('');

    // Set editing id to null.
    setEditingId(null);
  }, [name, age, price, setName, setAge, setPrice, setEditingId, validate, addGuestTicket, editGuestTicket]);

  useEffect(() => {
    setPrice(calculatePrice(age));
  }, [age]);

  useEffect(() => {
    // Getting index of guest which is to be edit.
    const indexOfGuest = guests.findIndex(guest => guest.id === editingId);

    // If the guest is not found, do nothing.
    if (indexOfGuest === -1) {
      setEditingId(null);
      return;
    };

    // Getting guest object to edit.
    const guestToEdit = guests[indexOfGuest];

    // Updating the input fields with the guest details to edit.
    setName(guestToEdit.name);
    setAge(guestToEdit.age);
  }, [editingId]);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h2>Book Ticket</h2>

        {errors.general && <div className={styles.generalError}>{errors.general}</div>}

        <div className={styles.guestInput}>

          <label htmlFor="name">Guest Name</label>

          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? styles.errorInput : ''}
          />

          {
            errors.name && <div className={styles.error}>
              {errors.name}
            </div>
          }

        </div>

        <div className={styles.guestInput}>

          <label htmlFor="age">Age</label>

          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => { setAge(e.target.value) }}
            className={errors.age ? styles.errorInput : ''}
          />

          {
            errors.age && <div className=
              {styles.error}>{errors.age}
            </div>
          }

        </div>

        <div className={styles.guestInput}>

          <label htmlFor="price">Price</label>

          <input
            type="number"
            id="price"
            value={price}
            readOnly
          />

        </div>

        <button
          className={`${styles.addButton} ${Object.keys(errors).length > 0 ? styles.errorButton : ''}`}
          onClick={handleGuest}
        >
          {editingId ? 'Update' : 'Add'} Guest
        </button>
      </div>

      <div className={styles.ticketsContainer}>
        {
          guests.map(guest => (
            <Ticket key={guest.id} guest={guest} setEditingId={setEditingId} removeGuestTicket={removeGuestTicket} />
          ))
        }
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Ticket Booking</p>
      </footer>
    </div>
  );
};

export default TicketBooking;
