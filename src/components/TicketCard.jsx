import React, { useState } from 'react';
import styles from '../styles/TicketCard.module.css';

const TicketCard = ({ guest }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Ticket ID: {guest.id}</h3>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {showDetails && (
        <div className={styles.details}>
          <p>Name: {guest.name}</p>
          <p>Age: {guest.age}</p>
          <p>Price: {guest.age <= 2 ? 'INR 0' : guest.age < 18 ? 'INR 100' : guest.age < 60 ? 'INR 500' : 'INR 300'}</p>
        </div>
      )}
    </div>
  );
};

export default TicketCard;
