import React, {useEffect} from 'react';
import axios from 'axios';
import '../App.css';

function Login() {

    useEffect(() => {
        axios.post('/recipients/login', {values: {email: 'audrey@gmail.com', password: 'pw'}}).then(({data}) => {
          console.log('RES', data)
        }).catch(error => {
          console.log('error', error)
        })
      }, [])

  return (
    <div>
        <h1>LOGIN</h1>
    </div>
  );
}

export default Login;