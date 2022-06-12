import React, {useEffect} from 'react';
import { ReactComponent as SignUpIcon } from './icons/signup.svg';
import { ReactComponent as CartIcon } from './icons/cart2.svg';
import axios from 'axios';
import { Link } from "react-router-dom";
import './App.css';
import './index.css';


function App() {

  const isUserLoggedIn = localStorage.getItem('user');

    const payload = {
      "first_name": 'xxx', "last_name": 'hhshsh', "email": 'audrey@gmail.com', "street_address": 'hhdhd', "country_location": 'gdggd', "city_location": 'hdd', "account_password": 'abc', "voucher": 'dhhd', "gov_issued_number": '123'
    }
  
    useEffect(() => {
      axios.post('/recipients/register', payload).then(res => {
        console.log('RES', res)
      }).catch(error => {
        console.log('error', error)
      })
  }, [])

  const logout = () => {
    localStorage.clear();
    //axios logout
  }


  return (

    <header>


      <Link to="/"><h1>ReconnecTech</h1></Link>


      <div className="nav-container">
        <Link to="/homepage"> <button>Home</button></Link>
        
        <Link to="/about"> <button>About us</button></Link>

        <Link to="/register-donor"> <button>Donate a device</button></Link>


        <Link to="/"> <button>Get a device</button></Link>


        {!isUserLoggedIn && <Link to="/login"> <button><SignUpIcon /></button></Link>}
        {isUserLoggedIn && <button onClick={logout}>Logout</button>}


        <Link to="/cart"> <button className="cart-button-header"><CartIcon /></button></Link>

      </div>


    </header>

  );
}

export default App;
