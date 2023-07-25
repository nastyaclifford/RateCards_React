import Rate from "./Rate.jsx"
import rates from "../data/rates.json";
import "../styles/index.scss";


function App() {
  return (
    <div className="container">
      {rates.map ((item, index) =>(
      <Rate 
      name = {item.name} 
      price = {item.price} 
      speed = {item.speed} 
      description = {item.description}
      isSelected = {item.isSelected}
      index = {item.index}
      blueTheme = {item.blueTheme}
      greenTheme = {item.greenTheme}
      orangeTheme = {item.orangeTheme}
      blackTheme = {item.blackTheme}
      key = {index}/>))}
    </div>
  );
}

export default App;
