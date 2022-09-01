import React, { useState } from 'react';
import { ReactComponent as SignUpIcon } from './icons/signup.svg';
import { ReactComponent as CartIcon } from './icons/cart2.svg';
import axios from 'axios';
import { useNavigate, NavLink } from "react-router-dom";
import './App.css';
import './index.css';


function App() {
  const [userLoggedIn, setUserLoggedIn] = useState<string | boolean | null>(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = async () => {
    localStorage.clear();
    setUserLoggedIn(false);

    axios.post('/auth/logout').then(() => navigate('/home'))
  }


  return (

    <header id="header-bar">

      <NavLink to="/"><h1>ReconnecTech</h1></NavLink>

      <div className="nav-container">

        <NavLink to="/about" className={({ isActive }) =>
          (isActive ? "active-class" : "")}> About us </NavLink>

        <NavLink to="/register-donor" className={({ isActive }) =>
          (isActive ? "active-class" : "")}> Donate a device </NavLink>


        {localStorage.getItem('user') !== 'donor-business' && <NavLink to="/get-a-device" className={({ isActive }) =>
          (isActive ? "active-class" : "")}>Get a device</NavLink>}


        {!localStorage.getItem('user') && <NavLink to="/login" className={({ isActive }) =>
          (isActive ? "icon-active" : "")}><SignUpIcon /></NavLink>}
        {(localStorage.getItem('user') || userLoggedIn) && <button onClick={logout}>Logout</button>}


        {localStorage.getItem('user') !== 'donor-business' && <NavLink to="/cart" className={({ isActive }) =>
          (isActive ? "icon-active" : "")}> <button className="cart-button-header"><CartIcon /></button></NavLink>}

      </div>


    </header>

  );
}

export default App;
