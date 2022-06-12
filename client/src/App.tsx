import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const payload = {
    "first_name": 'xxx', "last_name": 'hhshsh', "email": 'hhdhdh', "street_address": 'hhdhd', "country_location": 'gdggd', "city_location": 'hdd', "account_password": 'hhdhd', "voucher": 'dhhd', "gov_issued_number": '123'
  }

  useEffect(() => {

    axios.post('/recipients/register', payload).then(res => {
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
