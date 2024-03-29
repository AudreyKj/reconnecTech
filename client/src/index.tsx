import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './index.css';
import App from './App';
import Signup from './pages/Signup';
import Homepage from './pages/Homepage';
import Inventory from './pages/Inventory';
import About from './pages/About';
import RegisterDonor from './pages/RegisterDonor';
import RegisterRecipient from './pages/RegisterRecipient';
import Cart from './pages/Cart';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/register-donor" element={<RegisterDonor />} />
        <Route path="/register-recipient" element={<RegisterRecipient />} />
        <Route path="/get-a-device" element={<Inventory />} />
        <Route path="/about" element={<About />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate replace to="/" />} /> 
    </Routes>
  </BrowserRouter>
  </React.StrictMode >
);

