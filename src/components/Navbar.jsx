import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to close menu on link click
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-yellow-700 text-white p-4 shadow-lg sticky top-0 z-[200]">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" onClick={closeMenu}>
          <h2 className="text-2xl md:text-3xl font-black text-white ">
            SHOE<span className="text-[#FFD700]">POINT</span>
            <span className="text-sm text-white font-normal italic">.pk</span>
          </h2>
        </Link>

        {/* MOBILE TOGGLE ICON - Animated Icon Switch */}
        <div
          className="md:hidden cursor-pointer p-2 transition-transform duration-300 active:scale-90"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FiX
              size={28}
              className="text-yellow-500 animate-in spin-in-90 duration-300"
            />
          ) : (
            <FiMenu size={28} className="animate-in fade-in duration-300" />
          )}
        </div>

        {/* NAVIGATION LINKS WITH TRANSITIONS */}
        <ul
          className={`
            md:flex lg:space-x-8 md:static absolute left-0 w-full md:w-auto 
            flex-col md:flex-row items-center transition-all duration-500 ease-in-out
            bg-yellow-700 md:bg-transparent shadow-xl md:shadow-none
            ${
              isOpen
                ? "top-[100%] opacity-100 visible translate-y-0 py-8 border-t border-yellow-500"
                : "top-[110%] opacity-0 invisible -translate-y-5 md:translate-y-0 md:opacity-100 md:visible md:static flex"
            }
          `}
        >
          {["Home", "Categories", "Cart", "Contact"].map((item) => (
            <li key={item} className="w-full text-center md:w-auto">
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={closeMenu}
                className="hover:text-yellow-500 font-bold block py-4 md:py-0 transition-all duration-300 hover:tracking-widest"
              >
                {item}
              </Link>
            </li>
          ))}

          <li className="md:hidden mt-6 px-8 w-full">
            <Link
              to="/signin"
              onClick={closeMenu}
              className="bg-[#FFD700] px-10 py-4 rounded-2xl font-black shadow-lg transition-all active:scale-95 block text-center max-w-[280px] mx-auto hover:bg-white border-2 border-[#FFD700]"
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
