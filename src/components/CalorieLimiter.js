import React,{useState} from 'react'

function CalorieLimiter(props) {

  const [calories,setCalories]=useState(0)
  
  return (
    <div style={{
        display: 'flex',
        width: '17%',
        margin: '2rem auto',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '8px' // Add some padding for spacing
      }}>
        <input
          type="number"
          style={{ width: '40%' }}
          placeholder="Set Calories"
          onChange={(e)=>setCalories(e.target.value)}
        />
      
        <button style={{ width: '30%' }} onClick={()=>props.calorieSetter(calories)}>SET</button>
      </div>
      
  )
}

export default CalorieLimiter
