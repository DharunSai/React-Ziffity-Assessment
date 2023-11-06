import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import CalorieLimiter from "./CalorieLimiter"

const MainPage = () => {
  const [entries, setEntries] = useState([]); // Array to store food entries
  const [filter, setFilter] = useState(""); // Filter input state
  const [calories,setCalories] = useState(2100);

  const calorieSetter = (cal)=>{
    setCalories(cal);
  }

  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/add`; 
    navigate(path);
  }

  const dailyCalories = entries.reduce((acc, entry) => {
    const date = entry.date;
    const calories = entry.calories;
  
    if (!acc[date]) {
      acc[date] = 0;
    }
  
    acc[date] += calories;
  
    return acc;
  }, {});

  console.log(dailyCalories)

  // setList(list.map((l)=>{
  //   if(l.id==id)
  //   { 
  //    return{
  //     ...l,completed:true
  //    }
  //   }
  //    else
  //    {
  //     return l;
  //    }

  //   }

  useEffect(()=>{

    const calEntries = []
    console.log(calories,dailyCalories)
    entries.map((ele)=>{
      console.log(dailyCalories[ele.date],ele)
       if(dailyCalories[ele.date]>calories)
       {
          console.log(calories)
         calEntries.push({
           ...ele,calorieCheck: true
         })
       }
       else
       {
         calEntries.push({
          ...ele,calorieCheck: false
        })
       }
       console.log(dailyCalories[ele.date],ele)

     })
    setEntries(calEntries)
  },[calories])

 


  // setEntries(entries.map((ele)=>{
  //   if(dailyCalories[ele.date]>calories)
  //   {
  //     return{
  //       ...ele,calorieCheck: true
  //     }
  //   }
  //   else
  //   {
  //     return ele
  //   }
  //   console.log(ele.date)
  // }))

  // for (const date in dailyCalories) {
  //   if (dailyCalories[date] > calories) {
  //     console.log(`On ${date}, you exceeded your calorie limit with {${calories} calories.`);
  //   } else {
  //     console.log(`On ${date}, you stayed within your calorie limit with ${dailyCalories[date]} calories.`);
  //   }
  // }
  
  

  useEffect(() => {
    // Fetch food entries from your backend API and update the 'entries' state
    const storedEntries = JSON.parse(localStorage.getItem("foodEntries")) || [];
    setEntries(storedEntries);
    


       
      
  }, []);

  return (
    <div>
      <h1>Calorie Tracking App</h1>
      <input
        type="text"
        style={{'width':'40%', 'marginLeft':'30%','border':'1px solid black','padding':'0.8rem'}}
        placeholder="Filter by food "
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div style={{ display:'2px'}}>
      <CalorieLimiter calorieSetter={calorieSetter} />

        <h1>Calories set: {calories}</h1>

      </div>
     
      <table style={{"marginTop":"2rem"}}>
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Calories</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.foodName}</td>
              <td style={{  backgroundColor: entry.calorieCheck ? 'red' : 'green'}}>{entry.calories}</td>
              <td>{entry.date}</td>
            </tr>
          ))}
      
        </tbody>
      </table>

      <button className="add-btn" onClick={routeChange}>ADD FOOD</button>
    </div>
  );
};

export default MainPage;
