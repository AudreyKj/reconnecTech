import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import '../App.css';

function Signup() {
  const [values, setValues] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const authError = 'Please check your credentials and then try again.';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError('');
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    axios.post("/auth/login", { values }).then(({ data }) => {

      if(data.error === 'user not found' || data.error === 'password doesnt match'){
        return setError('Error: user not found.')
      }

      if(data.error){
        return setError(authError)
      }

      localStorage.setItem('user', data.userType);

      if (error) setError('');

      navigate('/');


    }).catch((error) => {
      console.log('error', error);
      setError(authError);
    })
  };

  return (
    <section className="signup">

      <div className="login-container">
        <form className="form-login" method="POST" autoComplete="off">
          LOGIN

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              autoComplete="off"
              minLength={3}
              required
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              autoComplete="off"
              minLength={5}
              required
            />
          </label>

          <button className="login-submit" onClick={handleLoginSubmit}>
            Login
          </button>
          {error && (
            <span className="error">{error}</span>
          )}
        </form>
      </div>

      <div className="register-options">
        <span> Register if you do not have an account:</span>
        <Link to="/register-donor"><button>Register to donate devices <br />(individual and businesses)</button></Link>
        <Link to="/register-recipient"><button>Register to receive devices <br />(only individuals)</button></Link>
      </div>

    </section>
  );
}

export default Signup;