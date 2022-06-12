import React from 'react';
import image from "../icons/homepage.jpg";
import '../App.css';

function Home() {
  return (
    <div>
      
      <div id="landing">

        <div id="img-wrapper"><img id="img" src={image} alt="landing-img"></img></div>

        <div id="redirecting-users">
          <h2>In a need for a new refurbished device?</h2>
          <h3>Explore our smartphones, tablets, and laptops</h3>
          <button id="shop-btn">Shop</button>
          <h4>Have an old device you’d like to donate to people<br></br> recently displaced or are of low means?</h4>
          <button id="doante-here-btn">Donate here</button>
        </div>
        
      </div>

      <div id="reviews">
        <div>
          <p className="recipient-review">“Times have been tough, but I am<br></br> ever grateful for the helpful<br></br> donations from the people of UK<br></br> and ReconnecTech.”</p>
        </div>
        <div>
          <p className="recipient-review">“My new refurbished phone has be<br></br> a game-changer for me. I can navigate<br></br> effortlessly in this new city, my home.”  </p>
        </div>
        <div>
          <p className="recipient-review">“After receiving my laptop from<br></br> ReconnecTech, I was able to<br></br> find a job. I feel so empowered!” </p>
        </div>

      </div>


    </div>
  );
}

export default Home;