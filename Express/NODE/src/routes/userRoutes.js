import express from "express";
import { registerUser,loginUser, logoutUser, getProfile, getNewAccessToken, verifiyEmail, verifyOtp } from "../controllers/userController.js";
import {auth } from "../middleware/auth.Middleware.js";


const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser );
router.post("/login/verify-otp",verifyOtp)
router.get("/logout", logoutUser );
router.get("/profile",auth, getProfile );
router.get("/refresh-token",getNewAccessToken)
router.get("/verify-email/:token",verifiyEmail)

export default router;


