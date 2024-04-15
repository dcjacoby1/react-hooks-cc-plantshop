import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react"



function PlantPage() {
  //use state to retreive plants data
  const [plantsDisplay, setPlantsDisplay] = useState([])
  //filters array to match search
  const [search, setSearch] = useState('')
  //filters the plantsDisplay array to only include whats in search
  //this const will be passed down as prop for PlantList, which is used for display
  const filteredList = plantsDisplay.filter(
    (plant) =>
    //only includes plant names that match the search
      plant.name.toLowerCase().includes(search.toLowerCase())
  )

useEffect(() => {
  fetch("http://localhost:6001/plants")
  .then(response => response.json())
  //this fills the PlantsDisplay array with DB information
  .then(plants => setPlantsDisplay(plants))
},[])
  return (
    <main>
      {/* passed down to add the newly added plant to the current list of plants */}
      <NewPlantForm setPlantsDisplay={setPlantsDisplay}/>
      {/* uses set search and setSearch to update the search value to whatever is typed in */}
      <Search search={search} setSearch={setSearch}/>
      {/* only needs the filtered list for what to display */}
      <PlantList filteredList={filteredList}/>
    </main>
  );
}

export default PlantPage;
