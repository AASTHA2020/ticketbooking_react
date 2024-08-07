import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TicketBooking from './pages/TicketBooking';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticketBooking" element={<TicketBooking />} />
      </Routes>
    </Router>
  );
};

export default App;
