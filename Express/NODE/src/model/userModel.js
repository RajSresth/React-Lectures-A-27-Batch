import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 20,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    unique:true,
    sparse: true
  },
  verificationTokenExpires: {
    type: Date,
  },
  otp: {
    type: String,
  },
  otpExpires: {
    type: Date,
  },
  twoFactor: {
    type: Boolean,
    default: false,
  },
  role:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Role'
  }
});

export const User = mongoose.model("User", userSchema);
