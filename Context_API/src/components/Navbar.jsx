import React, { useContext } from "react";
import { MyStore } from "../context/MyWebsite";

const Navbar = () => {

  let{setIsCardOpen}=useContext(MyStore)
  return (
    <div className=" bg-black rounded-xl flex justify-between p-5 items-center">
      <div>logo</div>
      <div className="flex gap-6 text-xl">
        <p
          className="cursor-pointer"
          onClick={() => {
            setIsCardOpen((prev) => true);
          }}
        >
          Home
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            setIsCardOpen((prev) => false);
          }}
        >
          Cart
        </p>
      </div>
      <button>Log In</button>
    </div>
  );
};

export default Navbar;
