import validate from "validator";


// firstName = ""
export const userValidate = ({firstName,lastName, email,password})=>{
    if(!firstName || !email || !password){
       throw new Error("Invalid firstname, email, password")
    }

    if(!validate.isLength(firstName,{min:2, max:18})){
       throw new Error("firstname min 2 and max 18");
    }

    if(!validate.isEmail(email)){
        throw new Error("Invalid Email Id");
    }

    if(!validate.isStrongPassword(password,{minLength: 8, minLowercase: 1, minUppercase: 1,minNumbers: 1, minSymbols: 1}))
    {
      throw new Error("Invalid Password");      
    }

    return true;
}


