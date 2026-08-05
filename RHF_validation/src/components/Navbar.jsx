import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="bg-black text-white flex justify-between items-center p-4 rounded">
      <div className="w-10 h-10 cursor-pointer ">
        <img
          className="rounded-full"
          src="https://plus.unsplash.com/premium_photo-1677252438411-9a930d7a5168?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMGljb258ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="font-semibold flex gap-6">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Contact</p>
      </div>
      <button
        className="bg-blue-800 py-2 px-5 rounded cursor-pointer"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;
