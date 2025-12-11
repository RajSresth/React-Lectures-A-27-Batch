import express from "express";
import {userValidate} from "../utils/userValidate.js"
const router = express.Router();

const users = [
    {
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
    res.cookie("token","secret123",{
                                        httpOnly:true,
                                        secure:true, 
                                        maxAge: 60 * 1000
                                    });
    res.status(200).send({msg:"Login Successfull"});
})


router.post("/signin",(req,res)=>{
    const isValidated = userValidate(req.body);
    if(!isValidated){
        return res.status(404).json({msg:"Invalid Credentials"})
    }

    res.status(200).send({msg:"Signin Successfull"});
})

router.get("/profile",(req,res)=>{
    console.log(req.cookies);    
    res.status(200).send({msg:"Profile Page"});
})

export default router;




