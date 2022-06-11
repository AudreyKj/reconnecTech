import React, { useEffect } from 'react';
import axios from "axios";
import './App.css';

function App() {

  const payload = {
    'first_name': 'Audrey', 'last_name': 'Kadjar', 'email': 'email@gmail.com', 'country_location': 'Germany', 'city_location': 'Berlin', 'account_password': '12345',
    'company_name': '', 'share_donations_public': true, 'device_type':
      ['tablets', 'smartphones'], 'device_count': 2, 'device_condition':
      'good', 'device_collection': 'shipping'
  }

  useEffect(() => {

    axios.post('/donations/register', payload).then(res => {
      console.log('RES', res)
    }).catch(error => {
      console.log('error', error)
    })

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
