import express from "express";
const router = express.Router();


router.post("/login",(req,res)=>{
    res.status(200).send({msg:"Admin Login successfull"})
})

router.get("/dashboard",(req,res)=>{
    res.status(200).json({msg:"Dashboard Dashboard.."})
})

export default router;