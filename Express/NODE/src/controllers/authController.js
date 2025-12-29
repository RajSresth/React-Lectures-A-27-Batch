import { User } from "../model/userModel.js";
import { userValidate } from "../utils/userValidate.js";
import { emailSend } from "../model/emailTemlate.js";
import crypto from "crypto";
import {
  verifyPasswordHash,
  generateHashPassword,
} from "../utils/passwordValidation.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/token.js";
import { createOtp } from './../utils/otp.js';
// Register User
export const registerUser = async (req, res) => {
  try {
    // 1. check req.body Validation
    userValidate(req.body);

    const { firstName, lastName, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user)
      return res
        .status(400)
        .json({ success: false, msg: "User Already Exist!!" });

    const token = crypto.randomBytes(32).toString("hex");
    console.log("crypto token:", token);

    const passwordHash = await generateHashPassword(password);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      verificationToken: token,
      verificationTokenExpires: Date.now() + 60000,
    });

    await newUser.save();
    const link = `http://localhost:3000/user/verify-email/${token}`;
    const htmlTemplate = `<h2>Email Verification Link:</h2>
                        <p>Please click this below link to verify your email. It valid only for <strong>10 min</strong></p>
                        <a href=${link}>${link}</a>`;

    await emailSend(email, "Email Verification Link", htmlTemplate);
    return res.json({
      msg: "verfication link send to registered email id",
    });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, msg: `ERROR: ${err.message}` });
  }
};

// Verify Email
export const verifiyEmail = async (req, res) => {
  try {
    const token = req.params?.token;
    const user = await User.findOne({
      verificationToken: token
    });

    console.log(user)

    if (!user) {
      return res.json({
              success: false,
              msg: "User Not Found!!",
            });
    }

    if(!(user.verificationTokenExpires > Date.now())){
      console.log("Email Link Expired")
         await User.findByIdAndDelete(user._id);

      
      return res.status(400).json({
              success: false,
              msg: "Email Verification Link expired Signin Again!!",
            });      
    }    


    console.log("Modification")
    user.emailVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;

    
      const otp = createOtp();
      user.otp = otp;
      user.otpExpires = Date.now() + 1 * 60 * 1000;

      console.log("Otp creation")
      await user.save();
    console.log("Db saved")
      const htmlOTPTemplate = `<h2>OPT for 2FA Verification</h2>
                                <p>Please mention this otp. 
                                It is valid only for <strong>2 min</strong></p>
                                <h4>OTP:${otp}</h4>`;

      await emailSend(user.email, "OTP for 2FA", htmlOTPTemplate);

    return res.status(201).json({
      success: true,
      msg: `Email Verified OTP is send to your registered email id`,
    });

  } catch (error) {
    return res
      .status(400)
      .json({ success: false, msg: `ERROR: ${error.message}` });
  }
};

//verifyOtp
export const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;
    const user = await User.findOne({otp});

    console.log(user)
    if (!user) {
      return res.status(400).json({
        success: false,
        msg: "Invalid OTP or OTP Expired",
      });
    }


    if(!(user.otpExpires > Date.now())){
       const otp =  createOtp();
       await emailSend(user.email, "OTP for 2FA",`<h2>OPT for 2FA Verification</h2>
                                <p>Please mention this otp. 
                                It is valid only for <strong>2 min</strong></p>
                                <h4>OTP:${otp}</h4>`);

          user.otp = otp;   
          user.otpExpires = Date.now() + 1 * 60 * 1000;
          await user.save()
          return res.json({
          success: true,
          msg: ` OTP is resend to your verified email`,
        })
    }

    user.otp = undefined;
    user.otpExpires = undefined;
    user.twoFactor = true;
    await user.save();

    return res.status(200).json({
      success: true,
      msg: "Two Factor Enabled Pls Login",
    });
    
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: "Error: " + error,
    });
  }
};

// login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find in db
    const user = await User.findOne({ email });

    if (!user) throw new Error("Invalid Credentials..!!");

    if (!user.emailVerified) throw new Error("Email is not Verified!!");

    const isValidPassword = await verifyPasswordHash(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid Credentials..!!");
    } else {
      
      //  Generate jwt access token
    const accessToken = generateAccessToken(
      user,
      process.env.JWT_SECRET_ACCESS_KEY
    );

    // Generate jwt refresh token
    const refreshToken = generateRefreshToken(
      user,
      process.env.JWT_SECRET_REFRESH_KEY
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      priority: "high",
      secure: process.env.NODE_ENV === "Production",
    });

    return res.status(200).json({
      success: true,
      msg: "Login Successfull",
      accessToken: accessToken,
    });
      
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: `ERROR: ${error.message}`,
    });
  }
};


// Logout
export const logoutUser = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ success: true, msg: "Logout User" });
};




// -----------------------------------------
export const getNewAccessToken = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;
  console.log("refreshToken:", refreshToken);

  if (!refreshToken) {
    return res.status(400).json({
      success: false,
      msg: "Missing Refresh Token..!",
    });
  }

  try {
    const payload = verifyRefreshToken(
      refreshToken,
      process.env.JWT_SECRET_REFRESH_KEY
    );

    const user = await User.findById(payload.id);

    if (!user) {
      return res.status(400).json({ success: false, msg: "Invalid User" });
    }

    const newAccessToken = generateAccessToken(
      user,
      process.env.JWT_SECRET_ACCESS_KEY
    );

    // const newRefreshToken = generateRefreshToken(
    //   user,
    //   process.env.JWT_SECRET_REFRESH_KEY
    // );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      priority: "high",
      secure: process.env.NODE_ENV === "Production",
    });

    return res.status(200).json({
      success: true,
      msg: "New Access token generated...!",
      accessToken: newAccessToken,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Internal Server Error",
      error: `Error: ${error.message}`,
    });
  }
};

export const getProfile = async (req, res) => {
  console.log(req.user.id);
  const id = req.user.id;
  const user = await User.findById(id);

  res.status(200).json({
    msg: "ok",
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  });
};
