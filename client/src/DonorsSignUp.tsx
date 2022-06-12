import React from 'react';
import './donorsSignUp.css';

function DonorsSignUp() {

  const user = 0;

  function individualTrue() {
    const user = 1; //represents individual
  }
  function businessTrue() {
    const user = 2; //represents business
  }

  return (
    <div>

      <div>
        <h1 id="donor-header">Welcome to ReconnecTech! Please identify where you belong:</h1>
      </div>

      <table id="donor-form">
        <tr>

          <td id="col1">
          <div id="individual" onClick={individualTrue}>
            <table>
              <tr className="row">
                <td><img id="individual-png" src={"individual.png"} alt="individual-logo" /></td>
              </tr>
              <tr>
                <td><h1 className="donor-text">I am an individual</h1></td>
              </tr>
            </table>
          </div>
          </td>

          <td id="col2">
          <div id="business" onClick={businessTrue}>
            <table>
              <tr className="row">
                <td><img id="business-png" src={"business.png"} alt="business-logo" /></td>
              </tr>
              <tr>
                <td><h1 className="donor-text">I own a business</h1></td>
              </tr>
            </table>
          </div>
          </td>

        </tr>
      </table>   
      
      <div id="form-panel">

        <table id="name">
          <tr>
            <td><h3 className="text-element">First Name: </h3></td>
            <td><input className="input-element" type="text"></input></td>
          </tr>
          <tr>
            <td><h3 className="text-element">Last Name: </h3></td>
            <td><input className="input-element" type="text"></input></td>
          </tr>
          <tr>
            <td><button className="next-btn">Next</button></td>
          </tr>
        </table>

        <table id="company-name">
          <tr>
            <td><h3 className="text-element">Company Name: </h3></td>
            <td><input className="input-element" type="text"></input></td>
          </tr>
          <tr>
            <td><button className="next-btn">Next</button></td>
          </tr>
        </table>

        <table id="email">
          <tr>
            <td><h3 className="text-element">Email: </h3></td>
            <td><input className="input-element" type="text"></input></td>
          </tr>
          <tr>
            <td><h3 className="text-element">Create Password: </h3></td>
            <td><input className="input-element" type="password"></input></td>
          </tr>
          <tr>
            <td><button className="next-btn">Next</button></td>
          </tr>
        </table>

        <table id="public">
          <tr>
            <td><h3 className="text-element">Make Donations Public?</h3></td>
            <td><input className="ckbx-element" type="checkbox"></input></td>
          </tr>
          <tr>
            <td><button className="next-btn">Next</button></td>
          </tr>
        </table>

        <table id="country">
          <tr>
            <td><h3 className="text-element">Country: </h3></td>
            <td>
            <select className="select-element">
              <option value="country">Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antartica">Antarctica</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="Span">Spain</option>
              <option value="SriLanka">Sri Lanka</option>
              <option value="St. Helena">St. Helena</option>
              <option value="Sudan">Sudan</option>
              <option value="Syria">Syrian Arab Republic</option>
              <option value="Thailand">Thailand</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Viet Nam</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Serbia">Serbia</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><h3 className="text-element">City: </h3></td>
            <td>
              <select className="select-element">
              <option value="city">City</option>
                <option value="Adams">Adams</option>
                <option value="Adams Center">Adams Center</option>
                <option value="Addison">Addison</option>
                <option value="Airmont">Airmont</option>
                <option value="Akron">Akron</option>
                <option value="Altamont">Altamont</option>
                <option value="Amagansett">Amagansett</option>
                <option value="Amherst">Amherst</option>
                <option value="Amityville">Amityville</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Andover">Andover</option>
                <option value="Angola">Angola</option>
                <option value="Arverne">Arverne</option>
                <option value="Astoria">Astoria</option>
                <option value="Firthcliffe">Firthcliffe</option>
                <option value="Fishkill">Fishkill</option>
                <option value="Flanders">Flanders</option>
                <option value="Flatbush">Flatbush</option>
                <option value="Flatlands">Flatlands</option>
                <option value="Floral Park">Floral Park</option>
                <option value="Florida">Florida</option>
                <option value="Flower Hill">Flower Hill</option>
                <option value="Fonda">Fonda</option>
                <option value="Fordham">Fordham</option>
                <option value="Forest Hills">Forest Hills</option>
                <option value="Fort Covington Hamlet">Fort Covington Hamlet</option>
                <option value="Fort Drum">Fort Drum</option>
                <option value="Fort Edward">Fort Edward</option>
                <option value="Fort Hamilton">Fort Hamilton</option>
                <option value="Franklin County">Franklin County</option>
                <option value="Franklin Square">Franklin Square</option>
                <option value="Franklinville">Franklinville</option>
                <option value="Fredonia">Fredonia</option>
                <option value="Freeport">Freeport</option>
                <option value="Fresh Meadows">Fresh Meadows</option>
                <option value="Frewsburg">Frewsburg</option>
                <option value="Friendship">Friendship</option>
                <option value="Fulton">Fulton</option>
                <option value="Glens Falls">Glens Falls</option>
                <option value="New York City">New York City</option>
                <option value="New York Mills">New York Mills</option>
                <option value="Newark">Newark</option>
                <option value="Newburgh">Newburgh</option>
                <option value="Newfane">Newfane</option>
                <option value="Niagara County">Niagara County</option>
                <option value="Niagara Falls">Niagara Falls</option>
                <option value="Niskayuna">Niskayuna</option>
                <option value="Nissequogue">Nissequogue</option>
                <option value="Niverville">Niverville</option>
                <option value="Norfolk">Norfolk</option>
                <option value="North Amityville">North Amityville</option>
                <option value="North Babylon">North Babylon</option>
                <option value="North Castle">North Castle</option>
                <option value="North Collins">North Collins</option>
                <option value="North Elba">North Elba</option>
                <option value="North Patchogue">North Patchogue</option>
                <option value="Sands Point">Sands Point</option>
                <option value="Saranac Lake">Saranac Lake</option>
                <option value="Saratoga County">Saratoga County</option>
                <option value="Saratoga Springs">Saratoga Springs</option>
                <option value="Schuylerville">Schuylerville</option>
                <option value="Scotchtown">Scotchtown</option>
                <option value="Scotia">Scotia</option>
                <option value="Scottsville">Scottsville</option>
                <option value="Sea Cliff">Sea Cliff</option>
                <option value="Seaford">Seaford</option>
                <option value="Searingtown">Searingtown</option>
                <option value="Yorktown Heights">Yorktown Heights</option>
                <option value="Yorkville">Yorkville</option>
                <option value="Youngstown">Youngstown</option>
                <option value="Zena">Zena</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><button className="next-btn">Next</button></td>
          </tr>
        </table>

        <table id="type-count">
          <tr>
            <td><h3 className="text-element">Device Type: </h3></td>
            <td><select className="select-element">
              <option value="smartphone">Smartphone</option>
              <option value="laptop">Laptop</option>
              <option value="tablet">Tablet</option>
            </select></td>
          </tr>
          <tr>
            <td><h3 className="text-element">Device Count: </h3></td>
            <td><input className="input-element" type="text"></input></td>
          </tr>
          <tr>
            <td><button className="next-btn">Next</button></td>
          </tr>
        </table>

        <table id="condition-collection">
          <tr>
            <td><h3 className="text-element">Condition:</h3></td>
            <td><select className="select-element">
              <option value="poor">Poor</option>
              <option value="fair">Fair</option>
              <option value="like-new">Like New</option>
              <option value="new">New</option>
            </select></td>
          </tr>
          <tr>
            <td><h3 className="text-element">Collection:</h3></td>
            <td><select className="select-element">
              <option value="shipping">Shipping</option>
              <option value="pickup">Pick-Up</option>
            </select></td>
          </tr>
          <tr>
            <td><button className="next-btn">Submit</button></td>
          </tr>
        </table>

        <table id="thankyou">
          <tr>
            <td><h3 className="text-element">
              Thank you for your support and kindness! <br></br>
              You can view your device tracking info on your <br></br><h2>Profile Page</h2></h3></td>
          </tr>
        </table>

      </div>   
    </div>
    
    );
  }
  
  export default DonorsSignUp;