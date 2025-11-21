import {useEffect, useState} from "react";
import Card from "./Card";
import Shimmer from './Shimmer';
import { getProducts } from "../services/api";

const Body = () => {
  const [productList, setProductList] = useState([])

  const load = async ()=>{
           const  products = await getProducts("/api/products") ; 

          
          setProductList(products);
      }

  useEffect( ()=>{   
      load()
  },[]);
    
  

  console.log("Body Render");
  if(productList.length === 0)
  {
    return <Shimmer></Shimmer>
  }
  
 
  return (
    <div>      
      <div className="center-container">
        <div className="card-container">
              {productList.map((element, index) => {
              return <Card key={index} item={element} />;
            })}            
        </div>
      </div>
    </div>
  );
};

export default Body;




