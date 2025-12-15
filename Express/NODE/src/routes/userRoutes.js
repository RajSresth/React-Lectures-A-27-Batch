import express from "express";
import {userValidate} from "../utils/userValidate.js"
import {isAuthenticated as auth} from "../middleware/auth.js"
const router = express.Router();

const users = [
    {
        userId:"qsp123",
        firstName:"Shresth",
        lastName:"Rajput",
        email:"shresth@gmail.com",
        password:"shresth123"
    }
]


router.post("/login", (req,res)=>{
    const {email,password} = req.body;

   const user = users.find(user=> user.email === email && user.password === password);

   if(!user){
        res.status(404).json({msg:"Invalid User"})
   }
    
    req.session.user = {emailId:email};
    res.status(200).send({
                            success: true, 
                            msg:"Login Successfull"
                        });
})


router.post("/signin",(req,res)=>{
    const isValidated = userValidate(req.body);
    if(!isValidated){
        return res.status(404).json({success: false,msg:"Invalid Credentials"})
    }
    res.status(200).send({msg:"Signin Successfull"});
})

router.get("/profile",auth,(req,res)=>{  
    console.log("Profile Route")
    // res.set("set-cookie",req.session.cookie);
    res.status(200).json({success : true, msg:"Profile Page"});
})

router.get("/feed",auth,(req,res)=>{   
    res.status(200).json({success : true, msg:"Profile Page"});
})

export default router;




