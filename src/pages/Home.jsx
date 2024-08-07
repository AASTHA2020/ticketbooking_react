import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/ticketBooking');
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <img src="/src/assets/leftImage.jpg" alt="Left Image" className={styles.image} />
        <div className={styles.overlay}>
          <h2>Left Section</h2>
          <button onClick={handleNavigate}>Discover More</button>
        </div>
      </div>
      <div className={styles.section}>
        <img src="/src/assets/rightImage.jpg" alt="Right Image" className={styles.image} />
        <div className={styles.overlay}>
          <h2>Right Section</h2>
          <button onClick={handleNavigate}>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
