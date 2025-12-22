import { User } from '../model/userModel.js';
import { userValidate } from '../utils/userValidate.js';
import { verifyPasswordHash,generateHashPassword } from "../utils/passwordValidation.js";
import { generateAccessToken, generateRefreshToken } from "../utils/token.js";


export const registerUser = async (req, res) => {
  try {
          // 1. check req.body Validation
           userValidate(req.body);

    const { firstName, lastName, email, password } = req.body;

    const  user = await User.findOne({email});
    if(user){
      return res.status(400).json({success:false,msg:"User Already Exist!!"})
    }

    const passwordHash = await generateHashPassword(password);

    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: passwordHash,
    });
    
    await newUser.save();
    return res.status(201).json(
      {
        success:true,
        msg: "Signin Successfull" 
      });
  } 
  catch (err) {
    return res.status(400).json({ success: false, msg:`ERROR: ${err.message}`});
  }
}


export const loginUser = async (req, res) => {
  try {
    const {email, password } = req.body;

    // find in db
    const user = await User.findOne({email:email});

      if(!user)
      {
        throw new Error("Invalid Email..!!");      
      }
     
      const isValidPassword = await  verifyPasswordHash(password,user.password);
      
      if(!isValidPassword){
       throw new Error("Invalid Password..!!");   
      }
      else{
        
        
        // Generate jwt token
        const accessToken = generateAccessToken(user,process.env.JWT_SECRET_ACCESS_KEY);
        const refreshToken = generateRefreshToken(user,process.env.JWT_SECRET_REFRESH_KEY);
       

          res.cookie("accessToken",accessToken,
            {
              httpOnly:true,
              priority:"medium",
              secure:process.env.NODE_ENV === "Production"
            });
            
          res.cookie("refreshToken",refreshToken,
            {
              httpOnly:true,
              priority:"high",
              secure:process.env.NODE_ENV === "Production"
            });

          return res.status(200).json({
                        success: true,
                        msg: "Login Successfull",
                      });
        }     
      } 
      catch (error) {
          return res.status(400).json({
                  success: false,
                  msg: `ERROR: ${error.message}`,
                }) 
      }
}


export const logoutUser = (req,res) => {
  res.clearCookie('token');
  res.json({success:true, msg: "Logout User"})
}


export const getProfile = (req,res) => {
  res.status(200).json({
    msg:"ok",
    data : [
      {
        fullName:"Sid",
        city:"Noida"
      },
      {
        fullName:"Aman",
        city:"Delhi"
      }
    ]
  })
}