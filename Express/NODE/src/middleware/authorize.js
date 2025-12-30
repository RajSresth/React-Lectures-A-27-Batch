import { User } from './../model/userModel.js';

const authorize = (...permission) => {

    return async (req,res,next) =>{
        try{
                const user = await User.findOne({_id:req.user.id}).populate('role');
                console.log("user inside Authorize:",user);

                const isAllowed = permission.every(p => user.role.permissions.includes(p))

                if(!isAllowed)
                    throw new Error("User Unauthorized!!");
                    
                next()
        }
        catch(err)
        {
            return res.status(403).json({
                        success:"false",
                        message:`Error: ${err}`
                    })
        }
    }
}

export default authorize