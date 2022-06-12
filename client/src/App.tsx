import React, { useState } from 'react';
import { ReactComponent as SignUpIcon } from './icons/signup.svg';
import { ReactComponent as CartIcon } from './icons/cart2.svg';
import axios from 'axios';
import { Link } from "react-router-dom";
import './App.css';
import './index.css';


function App() {
  const [userLoggedIn, setUserLoggedIn] = useState<string | boolean | null>(localStorage.getItem('user'));

  const logout = async () => {
    localStorage.clear();
    setUserLoggedIn(false);
    await axios.post('/auth/logout')
  }


  return (

    <header id="header-bar">

      <Link to="/"><h1>ReconnecTech</h1></Link>

      <div className="nav-container">
        <Link to="/homepage"> <button>Home</button></Link>

        <Link to="/about"> <button>About us</button></Link>

        <Link to="/register-donor"> <button>Donate a device</button></Link>


        <Link to="/get-a-device"> <button>Get a device</button></Link>


        {!localStorage.getItem('user') && <Link to="/login"> <button><SignUpIcon /></button></Link>}
        {(localStorage.getItem('user') || userLoggedIn) && <button onClick={logout}>Logout</button>}


        <Link to="/cart"> <button className="cart-button-header"><CartIcon /></button></Link>

      </div>


    </header>

  );
}

export default App;
