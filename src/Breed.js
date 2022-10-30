import { useState } from "react";


export default function Breed(props) { 
  const name = props.name;
  const temperment = props.temperament;
  const image = props.image.url;
  return (
    <div>
      <img src={image}></img>
      <h2>{name}</h2>
      <h3>{temperment}</h3>
    </div>
  )
}
  

  


