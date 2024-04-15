import React, { useState } from "react";

function PlantCard({name, image, price}) {
  const[stock, setStock] = useState(true)
  function handleClick() {
    setStock(!stock)
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <div onClick={handleClick}>
      {stock === true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      </div>
    </li>
  );
}

export default PlantCard;
