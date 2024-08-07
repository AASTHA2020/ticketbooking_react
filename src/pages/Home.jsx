import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';

// Import images
import leftImage from '../assets/leftImage.jpg';
import rightImage from '../assets/rightImage.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/ticketBooking');
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img src={leftImage} alt="Book Your Tickets Now" className={styles.image} />
        <div className={styles.overlay}>
          <h2 className={styles.header}>Book Your Tickets Now</h2>
          <button className={styles.leftButton} onClick={handleNavigate}>Discover More</button>
        </div>
      </div>
      <div className={styles.section}>
        <img src={rightImage} alt="Secure Your Concert Seats" className={styles.image} />
        <div className={styles.overlay}>
          <h2 className={styles.header}>Secure Your Concert Seats</h2>
          <button className={styles.rightButton} onClick={handleNavigate}>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
