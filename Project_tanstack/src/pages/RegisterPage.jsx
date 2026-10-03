import React from "react";
import { useAuth } from "../hooks/authHooks";
import { User, Mail, Lock, Eye } from "lucide-react";

const RegisterPage = () => {
  let { navigate, register, handleSubmit, errors, registerForm } = useAuth();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="h-[74px] border-b border-[#29292d] bg-[#09090b]">
        <div className="mx-auto flex h-full max-w-[1800px] items-center justify-between px-10">
          {/* Logo */}
          <div className="text-[26px] font-bold">
            <span className="text-white">Sky</span>
            <span className="text-[#fbbf00]">Mart</span>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="flex min-h-[calc(100vh-74px)] items-center justify-center px-5 py-10">
        {/* Register Card */}
        <div className="w-full max-w-[450px] rounded-xl border border-[#29292d] bg-[#0b0c0e] p-9 shadow-2xl">
          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-[30px] font-bold tracking-tight text-white">
              Create Account
            </h1>

            <p className="mt-2 leading-6 text-[#9da5b7]">
              Join SkyMart today and get access to the best products, deals and
              a seamless shopping experience.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(registerForm)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#c3c8d3]">
                Name
              </label>

              <div className="relative">
                <User
                  size={19}
                  strokeWidth={1.8}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#858d9e]
                  "
                />

                <input
                  {...register("name", {
                    required: "name is required",
                  })}
                  type="text"
                  placeholder="Enter your name"
                  className="
                    h-[54px]
                    w-full
                    rounded-lg
                    border
                    border-[#30333a]
                    bg-[#101216]
                    pl-12
                    pr-4
                    text-white
                    outline-none
                    placeholder:text-[#858d9e]
                    transition
                    focus:border-[#fbbf00]
                    focus:ring-1
                    focus:ring-[#fbbf00]
                  "
                />
              </div>

              {errors.name && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#c3c8d3]">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  strokeWidth={1.8}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#858d9e]
                  "
                />

                <input
                  {...register("email", {
                    required: "email is required",
                  })}
                  type="email"
                  placeholder="Enter your email"
                  className="
                    h-[54px]
                    w-full
                    rounded-lg
                    border
                    border-[#30333a]
                    bg-[#101216]
                    pl-12
                    pr-4
                    text-white
                    outline-none
                    placeholder:text-[#858d9e]
                    transition
                    focus:border-[#fbbf00]
                    focus:ring-1
                    focus:ring-[#fbbf00]
                  "
                />
              </div>

              {errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#c3c8d3]">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={19}
                  strokeWidth={1.8}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#858d9e]
                  "
                />

                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Minimum 8 characters are required",
                    },
                  })}
                  type="password"
                  placeholder="Create a password"
                  className="
                    h-[54px]
                    w-full
                    rounded-lg
                    border
                    border-[#30333a]
                    bg-[#101216]
                    pl-12
                    pr-12
                    text-white
                    outline-none
                    placeholder:text-[#858d9e]
                    transition
                    focus:border-[#fbbf00]
                    focus:ring-1
                    focus:ring-[#fbbf00]
                  "
                />

                <button
                  type="button"
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-[#858d9e]
                    transition
                    hover:text-white
                  "
                >
                  <Eye size={19} strokeWidth={1.8} />
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="
                mt-2
                w-full
                rounded-lg
                bg-[#fbbf00]
                py-3.5
                font-bold
                text-black
                transition
                duration-200
                hover:bg-[#ffd12a]
                active:scale-[0.99]
                cursor-pointer
              "
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#36363b]" />

            <span className="text-sm text-[#858d9e]">or</span>

            <div className="h-px flex-1 bg-[#36363b]" />
          </div>

          {/* Login Link */}
          <div className="text-center text-sm text-[#c3c8d3]">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              type="button"
              className="
                font-semibold
                text-[#fbbf00]
                transition
                hover:underline
                cursor-pointer
              "
            >
              Login
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
