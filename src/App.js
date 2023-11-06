import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AddFoodEntry from "./components/AddFoodEntry";// You can create this component to add new food entries

function App() {

  
  return (

    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddFoodEntry title="harold das" />} />
      </Routes>
    </div>
  );
}

export default App;
