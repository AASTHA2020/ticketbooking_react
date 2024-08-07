# Ticket Booking System

## Overview

The Ticket Booking System is a web application built with React that allows users to book tickets. It includes features for adding, editing, and deleting guest information, calculating ticket prices based on age, and storing data using local storage. The application also has a responsive and user-friendly interface.

## Features

- **Add Guests**: Input guest details and add them to the list.
- **Edit Guests**: Modify existing guest information.
- **Delete Guests**: Remove guests from the list.
- **Price Calculation**: Automatically calculates ticket price based on age:
  - Age <= 2 years: INR 0
  - Age > 2 and < 18 years: INR 100
  - Age >= 18 and < 60 years: INR 500
  - Age >= 60 years: INR 300
- **Local Storage**: Stores guest information in the browser's local storage.
- **Responsive Design**: Styled components with CSS modules for a better user experience.

