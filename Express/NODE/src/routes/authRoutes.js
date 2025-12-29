import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getProfile,
  getNewAccessToken,
  verifiyEmail,
  verifyOtp,
} from "../controllers/authController.js";
import { auth } from "../middleware/auth.Middleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/verifyEmail/:token", verifiyEmail);
router.post("/verifyOtp", verifyOtp);
router.post("/login", loginUser);
router.post("/forgetPassword", resetPassword);
router.get("/logout", logoutUser);

router.get("/profile", auth, getProfile);
router.get("/refresh-token", getNewAccessToken);

export default router;
