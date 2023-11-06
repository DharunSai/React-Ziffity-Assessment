import React, { useState,useEffect } from "react";
import axios from 'axios';

import "./AddFoodEntry.css"; // Import your CSS file

const AddFoodEntry = (props) => {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [entries,setEntries] = useState([])  

  console.log(props.title)

  console.log(entries)
  console.log(typeof(entries))

  useEffect(()=>{
    const storedEntries = localStorage.getItem('foodEntries')
    storedEntries ==null ? setEntries([]) :
    setEntries(storedEntries);
  },[])

  const handleAddEntry = () => {
    const data = {
      foodName,
      calories: parseInt(calories, 10), 
      date,
      calorieCheck: false
    };

    

    entries.length==0 ? setEntries(data):setEntries([...entries, data]);

   

    const allEntries = JSON.parse(localStorage.getItem("foodEntries")) || [];
    allEntries.push(data);
    localStorage.setItem("foodEntries", JSON.stringify(allEntries));

    setFoodName("");
    setCalories("");
    setDate("");
  
  };

  return (
    <div className="add-food-entry-container">
      <h2>Add Food Entry</h2>
      <form>
        <div className="form-group">
          <label>Food Name:</label>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Calories:</label>
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddEntry}>
          Add Entry
        </button>
      </form>
    </div>
  );
};

export default AddFoodEntry;
