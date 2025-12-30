import express from "express";
import { getprofile } from "../controllers/profileController.js";
import { auth } from "../middleware/auth.Middleware.js";
import authorize from "../middleware/authorize.js";
const router = express.Router();

router.post("/create", auth, authorize('create'), getprofile)
router.get("/read", auth, authorize('read'), getprofile)

export default router;