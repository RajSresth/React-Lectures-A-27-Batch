import bcrypt from "bcrypt";

export const generateHashPassword = async (password)=>{
    return await bcrypt.hash(password ,10);
}


export const verifyPasswordHash = async (password,passwordHash)=>{
 return await bcrypt.compare(password ,passwordHash);
}