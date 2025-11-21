const BASE_URL = "http://localhost:4000";

export const getProducts = async (endPoint) => {
    const response = await fetch(`${BASE_URL}${endPoint}`);
    return JSON.parse(await response.json());       
}

// endPoint = /api/products

// http://localhost:3000/api/products



