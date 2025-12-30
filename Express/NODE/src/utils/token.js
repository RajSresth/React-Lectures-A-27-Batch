import jwt from "jsonwebtoken";
import crypto from "crypto";

export const generateAccessToken = (payload, secret) => {
  return jwt.sign(payload, secret, { expiresIn: "3m" });
};

export const generateRefreshToken = ({ _id }, secret) => {
  return jwt.sign(
    {
      id: _id,
    },
    secret,
    { expiresIn: "7d" }
  );
};

export const verifyAccessToken = (token, secret) => {
  return jwt.verify(token, secret);
};

export const verifyRefreshToken = (token, secret) => {
  return jwt.verify(token, secret);
};


export const createToken = ()=>{
  return crypto.randomBytes(32).toString("hex")
}