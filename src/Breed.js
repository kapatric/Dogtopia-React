import { useState } from "react";


export default function Breed(props) { 
  const name = props.name;
  const temperment = props.temperment;
  const image = props.image.url
  return (
    <div>
      {image}
      <h2>{name}</h2>
      <h3>{temperment}</h3>
    </div>
  )
}
  

  


