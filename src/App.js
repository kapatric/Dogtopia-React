import React, { useState, useEffect } from "react";
import "./App.css"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import Breed from "./Breed"


export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState();
  const slides = []

  
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

  
  const handleClick = () => {
currentSlide++
  }

  if (!data) return;


  return (
    <div className="App">
      <header>
        <nav className="Navbar">
          <h1 className="nav-branding">Dogtopia</h1>   
          
        </nav>
        
      </header>

      <div>
        
        <div className="slides" >
          <FaArrowAltCircleLeft className="leftarrow"  />
          <FaArrowAltCircleRight className="rightarrow" />
          {
            data.map((data) => (
              <div>
                <img src={data.image.url}/>
                <h3>{data.name}</h3>
                <p>{data.temperament}</p>
              </div>
            ))
         }
          
          </div>
       
      </div>
      {/* <Breed image={data[currentSlide].image.url}
        name={data[currentSlide].name}
        temperament={data[currentSlide].temperament} />
     */}
      {console.log(data[currentSlide], "This is temperment")}
    </div>
  );
}
