import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const password = process.env.PASS;
console.log(password)
const uri = `mongodb+srv://shresth123:${password}@mycrm.rsek8bj.mongodb.net/UsersDB`;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log("database connected successfully..!", conn.connection.host);
  } catch (error) {
    console.log("Database not connected", error);
    process.exit(1);
  }
};
