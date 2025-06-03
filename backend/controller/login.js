import ErrorHandler from '../error/error.js'
import {Login} from '../models/loginSchema.js'

export const sendLogin = async (req,res , next)=>{
    const {email , password} = req.body;
    if(!email || !password){
        return next(new ErrorHandler('please fill full register form!' , 400))
    }try{
            await Login.create({email,password});
            res.status(200).json({
                success:true,
                message:"Login successfully!"
            });
        }catch(error){
            if(error.name === "ValidationError"){
                const validationErrors = Object.values(error.errors).map(
                    (err)=> err.message
                );
                return next(new ErrorHandler(validationErrors.join(" , "),400))
            }
            return next(error)
        }
}