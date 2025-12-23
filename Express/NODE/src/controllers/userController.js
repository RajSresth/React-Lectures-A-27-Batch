import { User } from "../model/userModel.js";
import { userValidate } from "../utils/userValidate.js";
import {
  verifyPasswordHash,
  generateHashPassword,
} from "../utils/passwordValidation.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/token.js";

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

    const passwordHash = await generateHashPassword(password);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    await newUser.save();
    return res.status(201).json({
      success: true,
      msg: "Signin Successfull",
    });
  } catch (err) {
    return res
      .status(400)
      .json({ success: false, msg: `ERROR: ${err.message}` });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find in db
    const user = await User.findOne({ email });

    if (!user) throw new Error("Invalid Email..!!");

    const isValidPassword = await verifyPasswordHash(password, user.password);

    if (!isValidPassword) {
      throw new Error("Invalid Password..!!");
    } else {
      // Generate jwt access and referes token
      const accessToken = generateAccessToken(
        user,
        process.env.JWT_SECRET_ACCESS_KEY
      );
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
        accessToken,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      msg: `ERROR: ${error.message}`,
    });
  }
};

export const logoutUser = (req, res) => {
  res.clearCookie("refreshToken");
  res.json({ success: true, msg: "Logout User" });
};

export const getNewAccessToken = async (req, res) => {
  const refreshToken = req.cookies?.refreshToken;
  console.log("refreshToken:",refreshToken);

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
      accessToken:newAccessToken
    });
  } catch (error) {
    return res
      .status(500)
      .json({
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
