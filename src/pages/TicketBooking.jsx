import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from '../styles/TicketBooking.module.css'; // Import the CSS module

const TicketBooking = () => {
  const [guests, setGuests] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [price, setPrice] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Load guests from local storage on component mount
  useEffect(() => {
    const storedGuests = JSON.parse(localStorage.getItem('guests')) || [];
    setGuests(storedGuests);
  }, []);

  // Save guests to local storage whenever guests array changes
  useEffect(() => {
    localStorage.setItem('guests', JSON.stringify(guests));
  }, [guests]);

  // Function to calculate price based on age
  const calculatePrice = (age) => {
    if (age <= 2) return 0; // Free for age <= 2
    if (age < 18) return 100; // Child price
    if (age < 60) return 500; // Adult price
    return 300; // Senior price
  };

  const handleAddGuest = () => {
    if (name && age) {
      const guestPrice = calculatePrice(age);
      if (editIndex !== null) {
        const updatedGuests = [...guests];
        updatedGuests[editIndex] = { name, age, price: guestPrice };
        setGuests(updatedGuests);
        setEditIndex(null);
      } else {
        setGuests([...guests, { name, age, price: guestPrice }]);
      }
      setName('');
      setAge('');
      setPrice('');
    }
  };

  const handleEdit = (index) => {
    setName(guests[index].name);
    setAge(guests[index].age);
    setPrice(guests[index].price);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h2>Book Ticket</h2>
        <div className={styles.guestInput}>
          <label htmlFor="name">Guest Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.guestInput}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => {
              const ageValue = e.target.value;
              setAge(ageValue);
              setPrice(calculatePrice(ageValue)); // Automatically update price
            }}
          />
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
        <button className={styles.addButton} onClick={handleAddGuest}>
          {editIndex !== null ? 'Update' : 'Add'} Guest
        </button>
      </div>

      <div className={styles.ticketsContainer}>
        {guests.map((guest, index) => (
          <div key={index} className={styles.ticket}>
            <div className={styles.ticketContent}>
              <h3>🙏Welcome ~ {guest.name}</h3>
              <p>Age: {guest.age}</p>
              <p>Price: ₹{guest.price}</p>
            </div>
            <button className={styles.editButton} onClick={() => handleEdit(index)}>
              <FaEdit />
            </button>
            <button className={styles.deleteButton} onClick={() => handleDelete(index)}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Ticket Booking</p>
      </footer>
    </div>
  );
};

export default TicketBooking;
