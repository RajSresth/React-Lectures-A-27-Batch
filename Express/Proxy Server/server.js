const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();


// Start server
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/path",async (req,res)=>{

  console.log("Proxy Server is Running");
  const {url} = req?.query;  
  console.log("url:",url);

  const fetchData = async(url)=>{
    const response = await fetch(url)
    return await response.json();
  }

  const result = await fetchData(url);
  
  res.status(200).send(JSON.stringify(result));
})


app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});


/*
1. Proxy server is running on http://localhost:${PORT}
2. Proxy Server is Running
3. url = http://localhost:3000/api/products
*/ 