import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const { setRegisteredUsers, registeredUsers } = useContext(Auth);

  let navigate = useNavigate();
  let {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {
    let arr = [...registeredUsers, data]
    setRegisteredUsers(arr);
    toast.success("Registered Successfully")
    localStorage.setItem("registeredUsers", JSON.stringify(arr))
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-indigo-600 flex items-center justify-center">
            <span className="text-2xl text-white font-bold">※</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>

          <p className="text-gray-500 mt-2">Register to get started</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "name is required",
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            {errors.name && (
              <p className="text-red-600"> {errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "email is required",
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            {errors.email && (
              <p className="text-red-600"> {errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                placeholder="Create a password"
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters are required",
                  },
                })}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />

              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition duration-200 shadow-lg"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Already have an account?{" "}
          <a
            onClick={() => navigate("/")}
            className="text-indigo-600 font-semibold hover:text-indigo-800 cursor-pointer"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
