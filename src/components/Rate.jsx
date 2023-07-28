import React, {useState} from "react";
import "../styles/Cards.scss"

export default function RateCards(props) {
    const [selected, setSelected] = useState (false);
    const handleChange = () => {
        setSelected (!selected)}
    
        return(
            <div>
                <div className = "list_item" >   
                    <div onClick={handleChange} className = {selected? "card selected" : "card"} > 
                    <div className = {"card-text " + (props.blueTheme? "blueTheme" : "") + (props.greenTheme? "greenTheme" : "") + (props.orangeTheme? "orangeTheme" : "") + (props.blackTheme? "blackTheme" : "") } > 
                    <div className="title" ><h2 className="item" >{props.name}</h2>
                    </div>
                        <div  className="item" > <div className="item-price" >{props.price}</div> руб/мес</div>
                        </div>
                        <div className = "item-speed" >
                            <div  className="item speed" >до {props.speed} Мбит/сек</div>
                            </div><div className = "item-info" >
                        <div  className="item info" >{props.description}</div> </div>
                        
                        </div>
                
            </div>
            </div>
        )
}