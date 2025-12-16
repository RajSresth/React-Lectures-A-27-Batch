import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
})

export const User = mongoose.model("User",userSchema);

