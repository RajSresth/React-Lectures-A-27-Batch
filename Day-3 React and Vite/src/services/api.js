const BASE_URL = "http://localhost:3000";

export const getProducts = async (endPoint) => {
   
        const response = await fetch(`${BASE_URL}${endPoint}`,
            {
                method:"GET",
                headers:{
                    'Content-Type':"application/json"
                },
                
            });

        return await response.json();   
   
   
}



export const postProducts = async (endPoint, data) =>{
        const response = await fetch(`${BASE_URL}${endPoint}`,{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
        });

            return await response.json();
}


export const deleteProduct = async (endPoint,id) => {
    const response = await fetch(`${BASE_URL}${endPoint}/${id}`,{
        method:"DELETE"
    }) 

    return await response.json();
}



