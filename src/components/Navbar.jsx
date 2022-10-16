import React, { useState } from "react";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img className="w-[118px] h-[32px]" src={logo} alt="" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-[56px]">
        {navLinks.map((nav) => (
          <li
            className={`nav-item text-white font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary`}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] object-contain"
          onClick={handleToggleMenu}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="flex flex-col gap-4 ">
            {navLinks.map((nav) => (
              <li
                className={`nav-item text-white font-poppins font-normal cursor-pointer text-[16px]`}
                key={nav.id}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
