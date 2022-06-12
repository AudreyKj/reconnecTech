import React from 'react';
import { ReactComponent as SignUpLogo } from './icons/signup.svg';
import { Link } from "react-router-dom";
import './App.css';
import './index.css';


function App() {
  return (
    <div className="App">
      <header>


          <div className="title-info-header">
            <Link to="/"><h1>Reconnectech</h1></Link>
            <Link to="/about"> <button className="about-button-header">About</button></Link>
          </div>



          <Link to="/signup"> <button className="signup-button-header"><SignUpLogo /></button></Link>
        

      </header>


    </div>
  );
}

export default App;
