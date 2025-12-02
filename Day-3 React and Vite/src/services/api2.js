import axios from "axios";


// GET Request
/**
 *   Basic Axios
 *   Axios Instance
 *   Axios Interceptors
 */



// Instance
const app = axios.create({
   baseURL:`http://localhost:3000`,
   headers:{
       "Content-Type":"application/json"
   },
   timeout:5000
})



export const getProducts = async (endPoint) =>{
   const {data} = await app.get(endPoint);
   console.log("data:",data);
   return data;
}



export const postProducts = async (endPoint,obj) => {
   const {data} = await app.post(endPoint,JSON.stringify(obj));
   console.log("data:",data);
   return data;
}

export const deleteProduct = async (endPoint,id) => {
   const {data} = await app.delete(`${endPoint}/${5}`);  
   return data;
}
     
                                       
                                       