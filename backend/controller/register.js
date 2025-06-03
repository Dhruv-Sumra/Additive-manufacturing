import ErrorHandler from '../error/error.js'
import {Register} from '../models/registerSchema.js'

export const sendRegister = async (req,res , next)=>{
    const {fullName , email , password , confirmPassword} = req.body;
    if(!fullName || !email || !password || !confirmPassword){
        return next(new ErrorHandler('please fill full register form!' , 400))
    }try{
            await Register.create({fullName,email,password,confirmPassword});
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