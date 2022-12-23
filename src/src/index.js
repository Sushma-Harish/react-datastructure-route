import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <form action="https://www.google.com/">
      <input type="search" name="q"></input>
      <button type="button">search button</button>
    </form>
    <h1 class="route-data"><i>THE KID TRAVELLED CITIES</i></h1>
    <div class="routes">
      <div class="kiev">
        Kiev
          

          </div>
      <div class="zurich">
        
          zurich
      </div>
      <div class="prague">
        
          prague
      </div>
      <div class="Berlin">
        Berlin
      </div>
      <div class="Barcelona">
        Barcelona
      </div>
      </div>
      <div class="ticket-route">
      <h1 class="ticket"><i>AVAILABLE TICKET ROUTES</i></h1>
      <div class="route1">
        Paris -- Skopje
      </div>
      <div class="route2">
       Zurich -- Amsterdam
      </div>
      <div class="route3">
      Prague -- Zurich
      </div>
      <div class="route4">
       Barcelona -- Berlin
      </div>
      <div class="route6">
        Kiev -- Prague
      </div>
      <div class="route7">
        Berlin -- kiev
      </div>
      <div class="route8">
        Berlin -- Amsterdam
      </div>
      </div>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
