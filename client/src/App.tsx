import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Login from './pages/Login';
import Inventory from './pages/Inventory';
import Profile from './pages/Profile';
import About from './pages/About';

function App() {
  return (
    <>
    <div className="App">


      <h1>hackathon app</h1>
      <Login />
    </div>
    </>
  );
}

export default App;
