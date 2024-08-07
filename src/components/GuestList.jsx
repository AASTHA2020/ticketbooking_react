import React from 'react';
import styles from '../styles/GuestList.module.css';

const GuestList = ({ guests }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{guest.name}</td>
              <td>{guest.age}</td>
              <td>
                {guest.age <= 2 ? 'INR 0' : guest.age < 18 ? 'INR 100' : guest.age < 60 ? 'INR 500' : 'INR 300'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GuestList;
