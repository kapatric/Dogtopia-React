import React, { useState, useEffect } from "react"
import axios from "axios";
import './App.css';

export default function Breed() {
  const [data, setData] = useState();
  const url = {
    method: 'GET',
    url: 'https://api.thedogapi.com/v1/breeds',
    headers: {
      'X-RapidAPI-Key': 'live_nWWQoLtH76j9sn8zN1QQPM56cYfwtERfwW06wUR6xPSxsDFXIaIZ3fk73kVzoRAW',
      Accept: "application/json",
    }
  };

  useEffect(() => {
    fetchBreed()
  }, []);
  

  let fetchBreed = () => {
    fetch(url.url, url.headers)
    .then((res) => res.json())
    .then((res) => console.log(res[0].name))
    .then((res) => setData(res))
  }




console.log(data)

  return (
    <div className="App">
      <header>
        <nav className="Navbar">
        <h1  className="nav-branding">Art BASEL</h1>
          <div className="Breed">{data}</div>
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </nav>
      </header>
    </div>
  );
}


