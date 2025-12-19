import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userValidate } from "../utils/userValidate.js";
import { User } from "../model/userModel.js";


const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const {email, password } = req.body;

    // find in db
    const user = await User.findOne({email:email});

      if(!user)
      {
        throw new Error("Invalid Email..!!");      
      }
     
      const isValidPassword = await bcrypt.compare(password ,user.password);
      
      if(!isValidPassword){
       throw new Error("Invalid Password..!!");   
      }else{
        // Generate jwt token
        console.log("Secret Key",process.env.JWT_SECRET_KEY);

        const jwtToken = jwt.sign({
                                id:user._id,
                                firstName:user.firstName
                              },process.env.JWT_SECRET_KEY, {expiresIn:'1m'});
        console.log("jwtToken:",jwtToken);

        res.cookie("token",jwtToken,{httpOnly:true,priority:"high"});

          return res.status(200).json({
                        success: true,
                        msg: "Login Successfull",
                      });
      }

     
  } catch (error) {
      return res.status(400).json({
              success: false,
              msg: `ERROR: ${error.message}`,
            }) 
  }
});

router.post("/signin", async (req, res) => {
  try {
    // 1. check req.body Validation
    const isValidated = userValidate(req.body);

    const { firstName, lastName, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: passwordHash,
    });
    
    await user.save();
    return res.status(200).json({success:true, msg: "Signin Successfull" });
  } catch (err) {
    return res.status(400).json({ success: false, msg:`ERROR: ${err.message}`});
  }
});


export default router;
