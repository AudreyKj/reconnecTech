import React from 'react';
import { ReactComponent as SignUpLogo } from './icons/signup.svg';
import { Link } from "react-router-dom";
import './App.css';
import './index.css';


function App() {

  const isUserLoggedIn = localStorage.getItem('user');
  //check for local-storage: 
  //// if loggedIn: display Profile instead of signup: same icon?

  //logout: clear storage 

  const logout = () => {
    localStorage.clear();
    //axios logout
  }


  return (

      <header>

          <div className="title-info-header">
            <Link to="/"><h1>Reconnectech</h1></Link>
            <Link to="/about"> <button className="about-button-header">About</button></Link>
          </div>



          {!isUserLoggedIn ? <Link to="/login"> <button className="signup-button-header"><SignUpLogo /></button></Link> : 
          <Link to="/profile"> <button className="signup-button-header">Your profile</button></Link>}
        

      </header>

  );
}

export default App;
