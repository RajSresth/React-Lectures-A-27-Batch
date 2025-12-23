import express from "express";
import { registerUser,loginUser, logoutUser, getProfile, getNewAccessToken } from "../controllers/userController.js";
import {auth } from "../middleware/auth.Middleware.js";


const router = express.Router();

router.post("/signin", registerUser);
router.post("/login", loginUser );
router.get("/logout", logoutUser );
router.get("/profile",auth, getProfile );
router.get("/refresh-token",getNewAccessToken)

export default router;
