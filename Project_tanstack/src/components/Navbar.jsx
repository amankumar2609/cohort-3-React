import React from "react";
import { NavLink } from "react-router";
import { LogOut, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full border-b border-zinc-800 bg-zinc-950 px-4 py-4 text-white sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-0">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Sky<span className="text-yellow-500">Mart</span>
        </h1>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 sm:gap-8">
          <NavLink
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-yellow-500"
                  : "text-zinc-400 hover:text-white"
              }`
            }
            end
            to="/main"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-yellow-500"
                  : "text-zinc-400 hover:text-white"
              }`
            }
            to="/main/shop"
          >
            Shop
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive
                  ? "text-yellow-500"
                  : "text-zinc-400 hover:text-white"
              }`
            }
            to="/main/about"
          >
            About
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <button className="flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white">
            <ShoppingCart size={18} />
            <span>Cart</span>
          </button>

          <h1 className="text-sm text-zinc-400">
            Hey,
            <strong className="ml-1 text-yellow-500">
              User
            </strong>
          </h1>

          <LogOut
            size={19}
            className="cursor-pointer text-zinc-400 transition hover:text-red-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
