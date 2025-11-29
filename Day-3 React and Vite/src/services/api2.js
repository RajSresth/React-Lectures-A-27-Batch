import axios from "axios";


// GET Request
/**
 *   Basic Axios
 *   Axios Instance
 *   Axios Interceptors
 */

const BASE_URL = "http://localhost:3000";

export const getProducts = async (endPoint) =>{
   const {data} = await axios.get(`${BASE_URL}${endPoint}`);
   console.log("data:",data);
   return data;
}