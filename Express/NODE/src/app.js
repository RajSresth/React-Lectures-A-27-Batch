import express from "express";
import {globalMiddleware,globalErrorMiddleware} from "./middleware/globalMiddleware.js";
import {task1, task2} from "./middleware/routeSpecefic.middleware.js"
import {movieController} from "./controllers/moviesController.js"
import userRoutes from "./routes/userRoutes.js"
import adminRoutes from "./routes/adminRoutes.js";
import session from "express-session";
const app = express();

// Global Middleware
app.use(globalMiddleware)  ;
app.use(express.json());
app.use(session({
    secret: "abc123",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        maxAge:60*1000,
        sameSite:"strict"
    }
}))

app.use("/api/v1", userRoutes);

app.use("/api/v2",adminRoutes);



// Error Handling Middleware
app.use(globalErrorMiddleware)

export default app;