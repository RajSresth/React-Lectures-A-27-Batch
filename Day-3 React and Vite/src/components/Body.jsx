import {useState} from "react";
import Card from "./Card";
import { config } from "../constants/constant";

const Body = () => {
  const [count, setCount] = useState(0); 
    
  const increment = ()=>{
    setCount(count + 1);
  }

 
  return (
    <div>      
      <div className="center-container">
        <div className="btn">
          <h1>Count: {count}</h1>
          <button onClick={increment} >Click</button>
        </div>  

        <div className="card-container">
              {config.map((element, index) => {
              return <Card key={index} item={element} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Body;




