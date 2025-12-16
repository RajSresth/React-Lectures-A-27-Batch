import express from "express";
import userRoutes from "./routes/userRoutes.js"
import adminRoutes from "./routes/adminRoutes.js";
import session from "express-session";
import dotenv from "dotenv";
const app = express();

dotenv.config();

// Global Middleware
app.use(express.json());

// app.use(session({
//     name:"sessionId",
//     secret: process.env.SECRET_KEY ,
//     resave:false,
//     saveUninitialized:false,
//     cookie:{
//         httpOnly:true,
//         maxAge: 60000,
//         sameSite:'lax',
//         path:"/",
//         priority:"high",
//         secure:false
//     }
// }))

app.use("/api/v1", userRoutes);

app.use("/api/v2",adminRoutes);

export default app;