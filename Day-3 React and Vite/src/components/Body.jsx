import {useState} from "react";
import Card from "./Card";
import { config } from "../constants/constant";

const Body = () => {
  const [reactCount,setreactCount] = useState(0);

  const handleClick = () =>{
    count++;
    console.log("count:",count); // 1
  }
  
  return (
    <div>      
      <div className="center-container">
        <div className="btn">
          <h2>Count: {reactCount}</h2> 
          <button onClick={handleClick}>Click</button>
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




