import React from "react";
import PlantCard from "./PlantCard";


function PlantList({filteredList}) {
//the setter and getter passed down are not used for initial rendering
const mappedPlants = filteredList.map(plant => <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>)

  return (
    <ul className="cards">{mappedPlants}</ul>
  );
}

export default PlantList;
