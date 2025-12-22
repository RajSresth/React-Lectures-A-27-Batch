import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const password = process.env.PASS;
    const uri = `mongodb+srv://shresth123:${password}@mycrm.rsek8bj.mongodb.net/UsersDB`;
    const conn = await mongoose.connect(uri);
    console.log("database connected successfully..!", conn.connection.host);
  } catch (error) {
    console.log("Database not connected", error);
    process.exit(1);
  }
};
