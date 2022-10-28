import React, { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider"
import "./App.css"

export default function App() {
  const [data, setData] = useState();
  const slides = []

  
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  }
  const url = {
    method: "GET",
    url: "https://api.thedogapi.com/v1/breeds",
    headers: {
      "X-RapidAPI-Key":
        "live_nWWQoLtH76j9sn8zN1QQPM56cYfwtERfwW06wUR6xPSxsDFXIaIZ3fk73kVzoRAW",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    fetchBreed();
  }, []);

  let fetchBreed = () => {
    fetch(url.url, url.headers)
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  
  if (!data) return;

  return (
    <div className="App">
      <header>
        <nav className="Navbar">
          <h1 className="nav-branding">Dogtopia</h1>   
          
        </nav>
        
      </header>

      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      {
    data.map((breed, index) => {
      slides.push(breed.image.url)
      return breed.image.url;
    })
  }
    </div>
  );
}
