import jwt from "jsonwebtoken";

export const generateAccessToken = ({_id,email},secret)=>{

 return   jwt.sign({
               id:_id,
               email
            },
            secret,
            {expiresIn: '2m'}
        );
}

export const generateRefreshToken = ({_id},secret)=>{

 return   jwt.sign({
               id:_id               
            },
            secret,
            {expiresIn: '7d'}
        );
}


export const verifyAccessToken = (token,secret) =>{
    return jwt.verify(token,secret);
}

export const verifyRefreshToken = (token,secret) =>{
    return jwt.verify(token,secret);
}
