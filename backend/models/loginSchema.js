import mongoose from "mongoose";
import validator from "validator";

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  password: {
    type: String,
    required: true,
  },
})

export const Login = mongoose.model('Login' , LoginSchema)
