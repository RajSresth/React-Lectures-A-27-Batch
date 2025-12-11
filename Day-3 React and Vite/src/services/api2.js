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

// GET Request
export const getProducts = async (endPoint) =>{
   const {data} = await app.get(endPoint);
   console.log("data:",data);
   return data;
}

// POST Request
export const postProducts = async (endPoint,obj) => {
   const {data} = await app.post(endPoint,JSON.stringify(obj));
   console.log("data:",data);
   return data;
}

// DELETE Request
export const deleteProduct = async (endPoint,id) => {
   const {data} = await app.delete(`${endPoint}/${id}`);  
   return data;
}

// PUT Request
export const replaceProduct = async (endPoint,id,obj) =>{
   const {data} = await app.put(`${endPoint}/${id}`,JSON.stringify(obj));
   return data;
}                                   
  
// PATCH Request
export const updateProduct = async (endPoint,id,obj) => {
   const {data} = await app.patch(`${endPoint}/${id}`,JSON.stringify(obj));
   return data;
}