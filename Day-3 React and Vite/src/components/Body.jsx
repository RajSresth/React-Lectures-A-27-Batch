import { useEffect, useState} from "react";
import Card from "./Card";
import Shimmer from './Shimmer';
import { getProducts,postProducts,deleteProduct } from "../services/api2";
import { replaceProduct} from "../services/api";

const Body = () => {
  const [productList, setProductList] = useState([])

  const load = async ()=>{
           const  products = await getProducts("/api/products") ;           
          setProductList(products);
      }

  useEffect( ()=>{   
      load()    // get request
    },[]);
    
    const handlePost = async ()=>{
          const newProduct = {
                      id: 5,
                      name: "Air Buds",
                      image:
                        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSA7rusF9rOr-xyMlncnq7MM9VBQQNJWqDIVlzWhjE2-80Telk9H_3kWjaxeC9RSHPu0goCtBCdnHLffw_dsSfFHU-xcWF6w3lCfK5g85nfWHUUG46H-9KA0A",
                      price: 11900,
                      description: "Apple AirPods Pro with MagSafe Charging Case",
                      rating: 4.7,
                    }

          const  msg = await postProducts("/api/products",newProduct);   
          console.log(msg);
          load()
    }
    
    const handleDelete = async () => {
        const msg = await deleteProduct("/api/products",5)
        console.log(msg);
         load()
    }


    const handleReplace = async () => {
      const newProduct = {
                      id: 1,
                      name: "Air Buds",
                      image:
                        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSA7rusF9rOr-xyMlncnq7MM9VBQQNJWqDIVlzWhjE2-80Telk9H_3kWjaxeC9RSHPu0goCtBCdnHLffw_dsSfFHU-xcWF6w3lCfK5g85nfWHUUG46H-9KA0A",
                      price: 11900,
                      description: "Apple AirPods Pro with MagSafe Charging Case",
                      rating: 4.7,
                    }
       const msg = await replaceProduct("/api/products",1,newProduct )
       console.log("msg:",msg);
       load()
    }

 
  return (
    <>      
      <div className="center-container">
        {productList.length === 0 ?
            <Shimmer></Shimmer> : 
            <div className="card-container">
              {
                productList.map((element, index) => {
                      return <Card key={index} item={element} />;
                 })
              }            
            </div>
         }

         <div className="btn-container">
                <button onClick={handlePost}>POST</button>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleReplace}>PUT</button>
         </div>
      </div>
    </>
  );
};

export default Body;




