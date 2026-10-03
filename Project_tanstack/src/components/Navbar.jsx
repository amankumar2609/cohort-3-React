import React from "react";
import { NavLink } from "react-router";
import { LogOut, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#29292d] bg-[#09090b] px-4 py-4 text-white">
      <div className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-[24px] font-bold tracking-tight">
          <span className="text-white">Sky</span>
          <span className="text-[#fbbf00]">Mart</span>
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-5 sm:gap-8">
          <NavLink
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-[#fbbf00]" : "text-[#a9b0c0] hover:text-white"
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
                isActive ? "text-[#fbbf00]" : "text-[#a9b0c0] hover:text-white"
              }`
            }
            to="/main/shop"
          >
            Shop
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `text-sm font-medium transition-colors ${
                isActive ? "text-[#fbbf00]" : "text-[#a9b0c0] hover:text-white"
              }`
            }
            to="/main/about"
          >
            About
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 sm:gap-7">
          <button className="flex items-center gap-2 text-sm text-[#a9b0c0] transition-colors hover:text-white">
            <ShoppingCart size={19} strokeWidth={1.8} />
            <span>Cart</span>
          </button>

          <div className="hidden h-6 w-px bg-[#36363b] sm:block" />

          <h1 className="hidden text-sm text-[#a9b0c0] sm:block">
            Hey,
            <strong className="ml-1 font-semibold text-[#fbbf00]">User</strong>
          </h1>

          <LogOut
            size={19}
            strokeWidth={1.8}
            className="cursor-pointer text-[#858d9e] transition-colors hover:text-red-400"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
