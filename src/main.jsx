import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store'; // Adjust path as needed
import App from './App'; // Adjust path as needed
import './index.css'; // Adjust path as needed

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
