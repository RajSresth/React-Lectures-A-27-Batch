import express from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/auth/user", userRoutes);
app.use("/user", userRoutes);

export default app;
