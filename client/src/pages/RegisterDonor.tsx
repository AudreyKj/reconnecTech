import React from 'react';
import '../App.css';

function RegisterDonor() {


  
  return (
    <div>
      <div>

        <div>
          <h1 id="donor-header">Want to help those in need get connected? 
          <br></br>And help reduce your carbon foot print?</h1>
        </div>

        <table className="form">
          <tr><p className="instructions">Please fill out form for donation submission</p></tr>
          <tr>
            <td><input placeholder="First Name" className="input-element" type="text"></input></td>
            <td><input placeholder="Last Name" className="input-element" type="text"></input></td>
          </tr>
          <tr className="table-row">
            <td colSpan={2}><input placeholder="Name of Company (Donating business)" className="row" type="text"></input></td>
          </tr>
          <tr className="table-row">
            <td><input placeholder="Street Address" className="input-element" type="text"></input></td>
            <td><input placeholder="City" className="input-element" type="text"></input></td>
          </tr>
          <tr>
            <td colSpan={2}><input placeholder="Email" className="row" type="text"></input></td>
          </tr>
          <tr>
            <td><input placeholder="Postal Code" className="input-element" type="text"></input></td>
            <td><input placeholder="Country" className="input-element" type="text"></input></td>
          </tr>

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
            <td><input placeholder="Smart Phone" className="input-element" type="text"></input></td>
            <td><input placeholder="" className="input-element" type="number"></input></td>
            <td><select className="select">
              <option>Condition</option>
              <option>Fair</option>
              <option>Good</option>
              <option>Like-New</option></select></td>
          </tr>
          <tr>
            <td><input placeholder="Tablet" className="input-element" type="text"></input></td>
            <td><input placeholder="" className="input-element" type="number"></input></td>
            <td><select className="select">
              <option>Condition</option>
              <option>Fair</option>
              <option>Good</option>
              <option>Like-New</option></select></td>
          </tr>
          <tr>
            <td><input placeholder="Laptop" className="input-element" type="text"></input></td>
            <td><input placeholder="" className="input-element" type="number"></input></td>
            <td><select className="select">
              <option>Condition</option>
              <option>Fair</option>
              <option>Good</option>
              <option>Like-New</option></select></td>
          </tr>
        </table>

        <table className="form">
          <tr><td colSpan={3}>
            <p className="instructions">Choose method of donation</p></td>
          </tr>
          <tr>
            <td><label><input className="radio" type="radio" name="shipping"></input>Drop-off device at main refurbishing<br></br> hub location listed below</label></td>
          </tr>
          <tr>
          <td><label><input type="radio" name="shipping"></input>Ship your device to:<br></br>London Industrial Park, <br></br>Unit 80, Roding Rd, London <br></br>E6 6LS, United Kingdom</label></td>
          </tr>
        </table>

        </div>   
      </div>
  );
}

export default RegisterDonor;