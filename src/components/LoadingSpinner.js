// src/components/LoadingSpinner.js
import React from 'react';
import styles from '../styles/LoadingSpinner.module.css'; // Create this CSS file for styling

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
