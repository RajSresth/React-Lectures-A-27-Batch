import {Schema, model} from "mongoose";

const roleSchema = new Schema({
        role:{
            type:String,
            required:true,
            unique:true,
            lowercase: true,
            enum:{
                values:["admin","premiumUser", "user"],
                message: '{VALUE} is not supported'
            },
            default:"user"
        },
        permissions:{
            type:[String],
            default:[]
        }
});

export default model('Role',roleSchema);