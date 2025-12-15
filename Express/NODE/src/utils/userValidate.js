import validate from "validator";


// firstName = ""
export const userValidate = ({firstName,lastName, email,password})=>{
    if(!firstName || !email || !password){
        return false;
    }

    if(!validate.isLength(firstName,{min:2, max:18})){
        return false
    }

    if(!validate.isEmail(email)){
        return false
    }

    if(!validate.isStrongPassword(password,{minLength: 8, minLowercase: 1, minUppercase: 1,minNumbers: 1, minSymbols: 1}))
    {
        return false
    }

    return true;
}


