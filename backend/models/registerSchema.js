import mongoose from "mongoose";
import validator from "validator";

const registerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters"],
    maxLength: [30, "First cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must be at least 8 characters long"],
    validate: [
      {
        validator: function (value) {
          return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,}$/.test(value);
        },
        message:
          "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character!",
      },
    ],
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: [
      {
        validator: function (value) {
          return value === this.password;
        },
        message: "Passwords must match!",
      },
    ],
  },
});

export const Register = mongoose.model('Register' , registerSchema)
