import React from 'react';
import '../App.css';

function RegisterRecipient() {
  
  function handleSignUpClick (){
    window.open("/login", "_self");
  }

  return (
    <div >
      <div className="recipient-form">
      <table >
        <tr><p className="instructions"><b>Create an Account</b></p></tr>
        <tr>
          <td><input placeholder="First Name" className="input-element" type="text"></input></td>
        </tr>
        <tr>
          <td><input placeholder="Last Name" className="input-element" type="text"></input></td>
        </tr>
        <tr>
          <td><input placeholder="Email" className="input-element" type="text"></input></td>
        </tr>
        <tr>
          <td><input placeholder="Password" className="input-element" type="password"></input></td>
        </tr>
        <tr>
          <p>At least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number.</p>
        </tr>
        <tr>
          <td><label><input type="checkbox"></input>I agree to receive ReconnecTech emails and newsletter.</label></td>
        </tr>
        <tr>
          <br></br><button onClick={handleSignUpClick} id="recipient-signup-btn">Sign me up</button>
        </tr>

      </table>
      </div>
    </div>
  );
}

export default RegisterRecipient;