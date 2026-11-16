import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const isAuth = async (req,res,next)=>{
try {
    const token = req.cookies?.token
    if(!token){
        return res.status(401).json({message:"token not found"})
    }

    let decoded
    try {
        decoded = jwt.verify(token,process.env.JWT_SECRET)
    } catch (error) {
        return res.status(401).json({message:"invalid token"})
    }

    req.user = await User.findById(decoded.id)
    if(!req.user){
        return res.status(401).json({message:"user not found"})
    }

    next()
} catch (error) {
    return next(error)
}
}

export default isAuth