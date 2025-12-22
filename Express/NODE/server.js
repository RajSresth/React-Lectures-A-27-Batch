import app from "./src/app.js"
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
dotenv.config();
const PORT = process.env.PORT || 4000;



// Databse connection call
connectDB()
    
    
// Server connection call
app.listen(PORT, ()=>{
    console.log(`Serve is running: http://localhost:${PORT}`);
});





