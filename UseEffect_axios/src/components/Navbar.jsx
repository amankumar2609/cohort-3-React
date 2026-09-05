import React, { useContext } from "react";

const Navbar = ({setIsCartOpen}) => {
  return (
    <div className=" bg-black rounded-xl flex justify-between p-5 items-center">
      <div>logo</div>
      <div className="flex gap-6 text-xl">
        <p className="cursor-pointer" onClick={() =>{
          setIsCartOpen(true)
        }}>Home</p>
        <p className="cursor-pointer" onClick={() =>{
          setIsCartOpen(false)
        }}>Cart</p>
      </div>
      <button>Log In</button>
    </div>
  );
};

export default Navbar;
