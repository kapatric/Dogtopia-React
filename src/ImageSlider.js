import React, { useState } from "react";
import "./App.js"
import Breed from "./Breed.js"

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentUser] = useState(0);

console.log(slides)

  const sliderStyles = {
    height: "100%",
    position: "realtive",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroaundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div style={sliderStyles}>
      <div style={slideStyles}>
        <h1>{ }</h1>
      </div>
    </div>
  );
};
export default ImageSlider;