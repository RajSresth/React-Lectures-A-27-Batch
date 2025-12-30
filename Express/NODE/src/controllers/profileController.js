import { User } from "../model/userModel.js"


export const getprofile = async (req,res) => {

    const allUsers = await User.find({})
    return res.status(200).json({
        success:true,
        data:allUsers
    })
}

export const createProfile = async (req,res) => {

    const user1 = await User.create({
        firstName: "Chombu",
        lastName: "Singh"
    })
    return res.status(200).json({
        success:true,
        data:user1
    })
}