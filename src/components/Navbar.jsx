import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import WhatsAppHelp from "./WhatsAppHelp"; // Ensure this file exists in the same folder

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-yellow-700 text-white p-4 shadow-lg sticky top-0 z-[200]">
      <div className="container mx-auto flex justify-between items-center">
        {/* 1. LOGO */}
        <Link to="/" onClick={closeMenu}>
          <h2 className="text-xl md:text-3xl font-black text-white">
            SHOE<span className="text-[#FFD700]">POINT</span>
            <span className="text-sm text-white font-normal italic">.pk</span>
          </h2>
        </Link>

        {/* 2. MOBILE ONLY SECTION */}
        <div className="flex items-center gap-3 md:hidden">
          {/* WhatsApp shows here ONLY on mobile to save space in the menu */}
          <WhatsAppHelp />

          <div
            className="cursor-pointer p-2 transition-transform active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>

        {/* 3. NAVIGATION LINKS & DESKTOP HELP */}
        <ul
          className={`
            md:flex lg:space-x-8 md:static absolute left-0 w-full md:w-auto 
            flex-col md:flex-row items-center transition-all duration-500 ease-in-out
            bg-yellow-700 md:bg-transparent shadow-xl md:shadow-none
            ${
              isOpen
                ? "top-[100%] opacity-100 visible translate-y-0 py-8 border-t border-yellow-500"
                : "top-[110%] opacity-0 invisible md:opacity-100 md:visible md:static flex"
            }
          `}
        >
          {["Home", "Categories", "Cart", "Contact"].map((item) => (
            <li key={item} className="w-full text-center md:w-auto">
              <Link
                to={
                  item === "Home"
                    ? "/"
                    : item === "Categories"
                    ? "/products"
                    : `/${item.toLowerCase()}`
                }
                onClick={closeMenu}
                className="hover:text-yellow-500 font-bold block py-4 md:py-0 transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}

          {/* DESKTOP ONLY: WhatsApp Help in the Nav List */}
          <li className="hidden md:flex items-center ml-4">
            <WhatsAppHelp />
          </li>

          {/* Sign In Button */}
          <li className="mt-6 md:mt-0 px-8 md:px-0 w-full md:w-auto">
            <Link
              to="/signin"
              onClick={closeMenu}
              className="bg-[#FFD700] tex px-8 py-3 md:py-2 rounded-xl font-black shadow-lg block text-center hover:bg-yellow-500 transition-all"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
