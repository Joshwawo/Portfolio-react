import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div>
      <div className=" w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg">
        <div className="px-2 flex justify-between items-center w-full h-full">
          <a href="/">
            <p className="font-bold uppercase">Jorge Morales</p>
          </a>
          <div className="flex items-center font-bold">
            <ul className="hidden md:flex">
              <li>
                <a
                  href="/"
                  className={({ isActive }) => (isActive ? "text-green-400" : "")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={({ isActive }) => (isActive ? "text-green-400" : "")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={({ isActive }) => (isActive ? "text-green-400" : "")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className={({ isActive }) => (isActive ? "text-green-400" : "")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
      
          <div className="md:hidden mr-4" onClick={handleClick}>
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
          </div>
        </div>
      
        <ul
          className={!nav ? "hidden" : "absolute text-center  bg-white w-full px-8 md:hidden"}
        >
           <li className="border-b-2 border-white w-full">
          <a
            href="/"
            onClick={handleClose}
            className={({ isActive }) => (isActive ? "text-green-300 " : "")}
          >
           Home
          </a>
          </li>
          <li className="border-b-2 border-white w-full">
          <a
            href="#"
            onClick={handleClose}
            className={({ isActive }) => (isActive ? "text-green-300" : "")}
          >
            
            About
            
          </a>
          </li>
          <li className="border-b-2 border-white w-full">
          <a
            href="#"
            onClick={handleClose}
            className={({ isActive }) => (isActive ? "text-green-300" : "")}
          >
          Projects
          </a>
          </li>
          <li className="border-b-2 border-white w-full">
          <a
            href="#"
            onClick={handleClose}
            className={({ isActive }) => (isActive ? "text-green-300" : "")}
          >
            Contact
          </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
