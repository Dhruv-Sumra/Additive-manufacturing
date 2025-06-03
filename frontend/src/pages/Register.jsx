import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { toast } from 'react-hot-toast';

const Register = () => {
  const [fullName , setFullName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");

  const handleRegister = async (e)=>{
    e.preventDefault();
    try{
      const {data} = await axios.post("http://localhost:4000/api/v1/register/send"
        ,{fullName,email,password,confirmPassword},
        {
          headers:{"Content-Type":"application/json"},
          withCredentials:true
        }
      );
      console.log(data)
      toast.success(data.message)
      setFullName(""),
      setEmail(""),
      setPassword(""),
      setConfirmPassword("")
    }catch(err){
        toast.error(err)
    }
  }

  return (
    <div className="max-h-[90vh] md:min-h-screen md:mt-0 mt-20 bg-blue-50 flex items-center justify-center ">
      <div className="w-full max-w-md bg-white md:rounded-lg shadow-md overflow-hidden">
        <div className="bg-blue-500 py-4 px-6">
          <h2 className="text-2xl font-semibold text-white">Create Account</h2>
        </div>

        <form className="p-6 space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500">Minimum 6 characters</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the <Link to="/terms" className="text-blue-500 hover:text-blue-700">Terms of Service</Link> and <Link to="/privacy" className="text-blue-500 hover:text-blue-700">Privacy Policy</Link>
            </label>
          </div>

         <button type="submit" onClick={handleRegister}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors mt-4"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-gray-600 pt-2">
            Already have an account?{" "}

            
            <Link to="/login" className="text-blue-500 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;