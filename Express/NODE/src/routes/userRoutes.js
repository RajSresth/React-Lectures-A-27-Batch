import express from "express";
import {userValidate} from "../utils/userValidate.js"
import {isAuthenticated as auth} from "../middleware/auth.js"
import {User} from "../model/userModel.js"

const router = express.Router();



router.post("/login", (req,res)=>{
    const {email,password} = req.body;

   

    
    req.session.user = {emailId:email};
    res.status(200).send({
                            success: true, 
                            msg:"Login Successfull"
                        });
})


router.post("/signin",async (req,res)=>{
    const isValidated = userValidate(req.body);
    if(!isValidated){
        return res.status(404).json({success: false,msg:"Invalid Credentials"})
    }
    const {firstName, lastName, email, password} = req.body;
    const user = new User({
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
    })
    await user.save();
    res.status(200).send({msg:"Signin Successfull"});
})

router.get("/profile",auth,(req,res)=>{  
    console.log("Profile Route")
    res.status(200).json({success : true, msg:"Profile Page"});
})

router.get("/feed",auth,(req,res)=>{   
    res.status(200).json({success : true, msg:"Profile Page"});
})

export default router;




