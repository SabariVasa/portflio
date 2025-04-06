import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-yBbnS7ZpQ7m0dKmuDdHctvOwXVR3s9txCRbFqPccmQRCUw7sHDLm97Go2Tjvvx5x+Z0NU9HgrTVe69x1f+GJ2g=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
/>




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);