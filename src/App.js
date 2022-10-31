import React, { useState, useEffect } from "react";
import "./App.css"
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"
import Breed from "./Breed"


export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState();
  const length = Breed.length;
  
  

  
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

  console.log(currentSlide)

  const nextSlide = () => {
    if (currentSlide >= 0) {
      setCurrentSlide(currentSlide + 1)
    } else {
      setCurrentSlide(0)
    }
  }
  
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  }


  if (!data)
  return;
  

  return (
    <div className="App">
      <header>
        <nav className="Navbar">
          <h1 className="nav-branding">Dogtopia</h1>   
          
        </nav>
        
      </header>

      <div>
        
        <div className="slides" >
          <FaArrowAltCircleLeft className="leftarrow" onClick={prevSlide} />
          <FaArrowAltCircleRight className="rightarrow" onClick={nextSlide}/>
          {/* {
            data.map((data) => ( */}
              <div>
                <img src={data[currentSlide].image.url}/>
                <h3>{data[currentSlide].name}</h3>
                <p>{data[currentSlide].temperament}</p>
              </div>
              
            {/* ))
         };           */}
          </div>
   
      </div>  
      
    </div>
  ); 
}
