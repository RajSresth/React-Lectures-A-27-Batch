import app from "./app.js"
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 4000;



// Databse connection call
connectDb()
.then(()=>{
    console.log("database connected successfully..!");
    
    // Server connection call
    app.listen(PORT, ()=>{
            console.log(`Serve is running: http://localhost:${PORT}`);
        });
})
.catch((err)=>{
    console.log("Database not connected",err);
})



