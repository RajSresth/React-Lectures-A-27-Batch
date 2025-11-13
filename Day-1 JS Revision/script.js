/**
 * ! Destructuring
const obj = {
    username :"Chombu",
    age:24,
    city:"Noida",
    state:"UP",
    pincode:201301
}

const {username,age,city, state, pincode} = obj;

console.log(username);
console.log(age);
console.log(city);
console.log(state);
console.log(pincode);
 */

/**
 * ! map, reduce, filter
 

const arr = [10,20,30,40,50];

const x = arr.map((element, index,array) =>{
                    return element * 10
                });

console.log("x:",x);
*/

/**
 * ! filter method
const restaurants = [
    {
        hotelName: "Burger Singh",
        address:"Noida sector-15"
    },
    {
        hotelName:"Burger King",
        address:"Noida sector-16"
    },
    {
        hotelName:"Captain Katora",
        address:"yamuna Vihar, delhi"
    },
    {
        hotelName:"Ama Caffee",
        address:"Majnu ka tila, delhi"
    },
    {
        hotelName:"360 caffee",
        address: "sector-74 gurugram"
    }
];

const searchInput = document.querySelector("#searchInput") ;
const button = document.querySelector("Button");


button.addEventListener("click", ()=>{
   const x = filteredRestaurant(searchInput.value.toLowerCase())
   console.log("x:",x)
})


function filteredRestaurant(query)
{
  return restaurants.filter(({hotelName}) =>  hotelName.toLowerCase().includes(query))
}
 */

/**
 * ! reduce method
 

const cart = [
    {
        productName:"Sprite",
        price:40
    },
    {
        productName:"Lays",
        price:20
    },
    {
        productName:"Pen Drive",
        price:1100
    },
    {
        productName:"Ear Buds",
        price:1200
    }
]

const total = cart.reduce((acc,{price}) =>{
    acc = acc + price;
    return acc;
}, 0);

console.log(total);*/

/**
 * ! rest and spread


import task from "./main.js";

// Rest Operator
// const {sum,...x} = task;

// Spread
    const logic = {
                        ...task,
                        prod : (a,b) => a * b,
                        pow : (a,b) => a ** b
                    }

console.log(logic)
 */

/**
 * ! fetch, promise, async await
 

const baseURL = "https://jsonplaceholder.typicode.com/users";

  fetch(baseURL)
    .then(response =>{
        if(!response.ok)
        {
            throw new Error("Failed to Fetch..!");
        }
        return response.json();
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error =>{
        console.log(error.name);
        console.log(error.message);
    });
*/
const baseURL = "https://jsonplaceholder.typicode.com/users";
async function getUsers() {
  try {
    const response = await fetch(baseURL);

    if (!response.ok) {
      throw new Error("Failed to Fetch..!");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }
}

getUsers();
