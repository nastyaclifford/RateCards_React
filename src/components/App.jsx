import Rate from "./Rate.jsx"
import rates from "../data/rates.json";
import "../styles/index.scss";
import React, {useState} from "react";


function App() {
  const [selected, setSelected] = useState (null);

  return (
    <div className="container">
      {rates.map ((item, index) =>(
      <Rate 
      name = {item.name} 
      price = {item.price} 
      speed = {item.speed} 
      description = {item.description}
      isSelected = {item.isSelected}
      blueTheme = {item.blueTheme}
      greenTheme = {item.greenTheme}
      orangeTheme = {item.orangeTheme}
      blackTheme = {item.blackTheme}
      selected = {selected}
      setSelected = {setSelected}
      index = {index}
      key = {index}
      />))}
    </div>
  );
}

export default App;
