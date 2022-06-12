import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../App.css';

function RegisterDonor() {
  //first_name, last_name, email, country_location, city_location, account_password, company_name, 
  //share_donations_public, device_type, device_count, device_condition, device_collection

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [deviceCondition, setDeviceCondition] = useState('');
  const [error, setError] = useState('');

  const [smartphonesCount, setSmarphonesCount] = useState<string | number>(0);
  const [tabletCount, setTabletCount] = useState<string | number>(0);
  const [computerCount, setComputerCount] = useState<string | number>(0);
  const [deviceCollection, setDeviceCollection] = useState('');
  const navigate = useNavigate();


  const handleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    setDeviceCondition(prev => prev + '-' + target.value)
  }

  const submitDonation = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()

    let deviceType;

    const smartphones = parseInt(smartphonesCount as string);
    const tablets = parseInt(tabletCount as string);
    const computers = parseInt(computerCount as string);

    if (smartphones> 0) deviceType = "smartphones";
    if (tablets > 0) deviceType = deviceType + " " + "tablets";
    if (computers > 0) deviceType = deviceType + " " + "computer";

    const deviceCount = smartphones + tablets + computers;

    console.log('deviceCount', deviceCount);

    axios.post("/donations/register/donor", { firstName, lastName, companyName, city, country, email, password, deviceCondition, deviceCollection, deviceCount, deviceType }).then(() => {
        localStorage.setItem('user', 'donor');

        if (error) setError('');

        navigate('/');

    }).catch(() => {
      //setError('Please double check all the fields and try again.')
      navigate('/');

      // setTimeout(() => {
      //   setError('')
      // }, 3000)
    })
  }

  const handleSelectCollection = (e: React.FormEvent<HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;;
    setDeviceCollection(target.value);
  }

  return (
    <div className="register-donor">
      <div>

        <div>
          <h1 id="donor-header">Want to help those in need get connected?
            <br></br>And help reduce your carbon foot print?</h1>
        </div>

        <table className="form">
          <tr><p className="instructions">Please fill out form for donation submission</p></tr>
          <tr>
            <td><input placeholder="First Name" className="input-element" type="text" onChange={(e) => setFirstName(e.target.value)}></input></td>
            <td><input placeholder="Last Name" className="input-element" type="text" onChange={(e) => setLastName(e.target.value)}></input></td>
          </tr>
          <tr>
            <td><input placeholder="Password" className="input-element" type="password" onChange={(e) => setPassword(e.target.value)}></input></td>
            <td><input placeholder="Email" className="input-element" type="text" onChange={(e) => setEmail(e.target.value)}></input></td>
          </tr>
          <tr>
            <td><input placeholder="City" className="input-element" type="text" onChange={(e) => setCity(e.target.value)}></input></td>
            <td><input placeholder="Country" className="input-element" type="text" onChange={(e) => setCountry(e.target.value)}></input></td>
          </tr>
          <tr><td><input placeholder="Name of Company (Donating business)" className="row" type="text" onChange={(e) => setCompanyName(e.target.value)}></input></td></tr>

        </table>

        <table className="form">
          <tr><td colSpan={3}>
            <p className="instructions">Donating device information</p></td>
          </tr>
          <tr>
            <td><p className="instructions">Device Type</p></td>
            <td><p className="instructions">How many?</p></td>
            <td><p className="instructions">Condition?</p></td>
          </tr>
          <tr>
            <td><input placeholder="Smart Phone" className="input-element" type="text" disabled></input></td>
            <td><input placeholder="" className="input-element" type="number" onChange={(e) => setSmarphonesCount(e.target.value)}></input></td>
            <td><select className="select" onChange={handleSelect}>
            <option value='fair'>Fair</option>
              <option value="good">Good</option>
              <option value="like-new">Like-New</option>
              </select></td>
          </tr>
          <tr>
            <td><input placeholder="Tablet" className="input-element" type="text" disabled></input></td>
            <td><input placeholder="" className="input-element" type="number" onChange={(e) => setTabletCount(e.target.value)}></input></td>
            <td><select className="select" onChange={handleSelect}>
              <option value='fair'>Fair</option>
              <option value="good">Good</option>
              <option value="like-new">Like-New</option></select></td>
          </tr>
          <tr>
            <td><input placeholder="Computer" className="input-element" type="text" disabled></input></td>
            <td><input placeholder="" className="input-element" type="number" onChange={(e) => setComputerCount(e.target.value)}></input></td>
            <td><select className="select" onChange={handleSelect}>
              <option value='fair'>Fair</option>
              <option value="good">Good</option>
              <option value="like-new">Like-New</option></select></td>
          </tr>
        </table>

        <table className="form">
          <tr><td colSpan={3}>
            <p className="instructions">Choose method of donation</p></td>
          </tr>
          <tr>
            <label>
              <select className="select" onChange={handleSelectCollection}>
                <option value="dropOff">Drop-off</option>
                <option value="shipping">Shipping</option></select>
            </label>
          </tr>
          <tr>
          </tr>
          <tr>
            <td>{error && <span className="error">{error}</span>}<br></br><button id="btn" type="submit" onClick={submitDonation}>Submit</button></td>
          </tr>
        </table>



      </div>
    </div>
  );
}

export default RegisterDonor;