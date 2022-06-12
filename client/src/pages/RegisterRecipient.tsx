import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';

interface FormValues {
  firstName?: string;
  lastName?: string;
  password?:string;
  email?: string;
  city?:string;
  govIssuedNumber?:string;

}

function RegisterRecipient() {
  const [values, setValues] = useState<FormValues | null>(null);
  const [error, setError] = useState<boolean | string>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (values !== null) {
      const { firstName, lastName, password, email } = values;

      if (!firstName || !lastName) {
        return setError(
          "Please make sure your names are correctly entered."
        );
      }

      if (!email || email.length < 3 || !email.includes("@")) {
        return setError(
          "Please make sure you entered your email correctly."
        );
      }

      if (!password || password.length < 8 || !/[0-9]/g.test(password)) {
        return setError(`Please make sure you entered your password correctly.`);
      }
    } 

    axios.post("/recipients/register", { values }).then(({ data }) => {
      if (data.error) {
          return setError("Error: please try again.");
      } else {
          console.log('DATA SIGNUP', data)
          localStorage.setItem('user', data.userType);

          if(error)setError('');

          navigate('/');

      }
  }).catch(() => {
    setError("Error: please try again.");

    setTimeout(() => {
        setError('')
    }, 3000)
  })
  };

  return (
    <div className="signup-recipients-auth-wrapper">
        <div className="auth-signup-recipients-container">
          <form className="auth" method="POST" autoComplete="off">
            <h1>Create an account to get devices (<Link to="/login">login</Link> if you already have an account)</h1>
            <Link to="/login">
             
            </Link>
            <label htmlFor="firstName">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </label>

            <label htmlFor="lastName">
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </label>

            <label htmlFor="email">
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
            <label htmlFor="city">
              <input
                type="text"
                name="city"
                placeholder="city"
                onChange={handleChange}
                autoComplete="off"
                minLength={5}
                required
              />
            </label>
            <label htmlFor="govIssuedNumber">
              <input
                type="text"
                name="govIssuedNumber"
                placeholder="government-issued number if applicable"
                onChange={handleChange}
                autoComplete="off"
                minLength={5}
                required
              />
            </label>

            <span className="pw-requirements">At least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.</span><br/>

            <button className="submit" onClick={handleClick}>
              Sign me up
            </button>

            {error && <span className="error">{error}</span>}
          </form>
        </div>

 


    </div>
  );
}

export default RegisterRecipient;