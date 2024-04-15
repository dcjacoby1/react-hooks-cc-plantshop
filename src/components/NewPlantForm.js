import React from "react";
import { useState } from "react";
//takes the current plant
//onChange for each input
//onsubmit for submitting form
//event.preventDefault() + event.target.value
//when submitted, event handler will do a post request
//it will create newPlant object
//then it will setPlantsDisplay with the new object using spread operator, newPlantObj

function NewPlantForm({setPlantsDisplay}) {

  //use state to add form submittion to list of plants
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

//when submitted 
function handleSubmit(event)  {
  //always used for form submit
  event.preventDefault()
  //post request format -> sent to plants DB
  fetch(`http://localhost:6001/plants`,{
    method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        // 'Accept': 'application/json'
      },
      //put the data we send into json
      body: JSON.stringify( formData )
  })
  .then(response => response.json())
  //creates a new Object for plant added
  .then(newPlantObj => {
    setFormData({
      name: "", image: "", price: ""
    })
    //adds the new object to the current array of objects
    setPlantsDisplay(plantsDisplay => [...plantsDisplay, newPlantObj])

  })
}
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      {/* submit event for name field */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
        // whatever is typed into the name field will be the name value for the new form object
        value={ formData.name }
        // as each letter is typed, it keeps the previously added values and adds the new values
        onChange={ (event) => setFormData( {...formData, name: event.target.value} ) } />
        <input type="text" name="image" placeholder="Image URL" 
        value={ formData.image }
        onChange={ (event) => setFormData( {...formData, image: event.target.value} ) } />
        <input type="number" name="price" step="0.01" placeholder="Price" 
        value={ formData.price }
        onChange={ (event) => setFormData( {...formData, price: event.target.value} ) } />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
