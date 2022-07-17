import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [cuisineType,setCuisineType] = useState('All');

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods,newFood]
    setFoods(newFoodArray);
  }

  function handleFoodClick(id){
  //const newFoods=foods.filter(food=>food.id !== id)  -- click and remove the element.
  const newFoods = foods.map(food=>{
  if(food.id===id){
  food.heatLevel + 1;
  return food;
  }
  return food; 
  })
  setFoods(newFoods)
  }

  function handleFilterChange(event){
    setCuisineType(event.target.value);
  }
  
    const cuisinetoDisplay = foods.filter(food=>{
    if(cuisineType === 'All'){
      return true;
    }
    return cuisineType === food.cuisine
    });


  const foodList = cuisinetoDisplay.map((food) => (
    <li key={food.id} onClick={()=>handleFoodClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  
  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
          <ul>{foodList}</ul>
  </select>
    </div>
  );
}

export default SpicyFoodList;
