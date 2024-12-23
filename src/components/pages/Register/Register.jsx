import React from "react";
import { FaFacebook } from "react-icons/fa";
import {  FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {

    const handlerSubmit = (e) => {
        e.preventDefault();
        const from = e.target;
        const firstName = from.firstName.value;
        const lastName = from.lastName.value;
        const email = from.email.value;
        const password = from.password.value;
        const confirmPassword = from.confirmPassword.value;
        // Validation logic
        if (password!== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
       
        const userInfo ={
            firstName,
            lastName,
            email,
            password
        }
        console.log(userInfo)
    }
    




  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>
        <form onSubmit={ handlerSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              First Name
            </label>
            <input
            name="firstName"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F63E7B] focus:outline-none"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Last Name
            </label>
            <input
            name="lastName"
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F63E7B] focus:outline-none"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
            name="email"
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F63E7B] focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
            name="password"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F63E7B] focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
            name="confirmPassword"
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#F63E7B] focus:outline-none"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#F63E7B] text-white py-2 px-4 rounded-md hover:bg-[#e32d6a] transition-colors"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#F63E7B] hover:underline">
            Log in
          </Link>
        </p>
        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        {/* social login */}
        <div>
          <button className="w-full py-2 px-4 border rounded-2xl flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-100 transition-colors">
           <FcGoogle className="w-6 h-6  " />
            <span>Sign up with Google</span>
          </button>
          <button className="w-full mt-2 py-2 px-4 border rounded-2xl flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-100 transition-colors">
           <FaFacebook className="w-6 h-6 text-[#3076FF]"/>
            <span>Sign up with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;