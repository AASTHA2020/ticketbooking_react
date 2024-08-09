import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';

// Import images
import leftImage from '../assets/leftImage.jpg';
import rightImage from '../assets/rightImage.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img src={leftImage} alt="Book Your Tickets Now" className={styles.image} />
        <div className={styles.overlay}>
          <h2 className={styles.header}>BOOK YOUR <b>TICKETS NOW</b></h2>
          <button className={styles.leftButton} onClick={() => handleNavigate('/ticketBooking')}>Discover More</button>
        </div>
      </div>
      <div className={styles.section}>
        <img src={rightImage} alt="Secure Your Concert Seats" className={styles.image} />
        <div className={styles.overlay}>
          <h2 className={styles.header}>SECURE YOUR <b>CONCERT SEATS</b></h2>
          <button className={styles.rightButton} onClick={() => handleNavigate('/ticketBooking')}>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
