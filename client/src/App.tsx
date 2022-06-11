import React, { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {

    fetch('/users/auth/register').then(res => res.json())
    .then(res => console.log('backend test', res))
    .catch(error => console.log('ERROR', error))

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1> our hackthathon app!!!</h1>
      </header>
    </div>
  );
}

export default App;
