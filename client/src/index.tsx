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
import Inventory from './pages/Inventory';
import Profile from './pages/Profile';
import About from './pages/About';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
      <Route path="/" element={<Inventory />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode >
);

