import mongoose from "mongoose";
const password = process.env.PASS;


const uri = `mongodb+srv://shresth123:${password}@mycrm.rsek8bj.mongodb.net/`;

export  const connectDb = async ()=>{
    await mongoose.connect(uri);
}



