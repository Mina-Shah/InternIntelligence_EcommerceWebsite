import React, { useState } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import WhatsAppHelp from "./WhatsappHelp";
import Search from "./Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Ensure these match your Product data categories exactly
  const categories = ["Sports", "Formal", "Casual"];

  return (
    <div className="fixed top-0 left-0 right-0 z-[200]">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#133250] text-white text-[10px] md:text-xs py-2 text-center font-bold tracking-[0.2em] uppercase">
        Free Delivery in Karachi on orders over Rs. 5000 🚚
      </div>

      <nav className="bg-white text-black border-b border-gray-100 shadow-sm relative">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex justify-between items-center py-4 md:py-6">
            {/* LOGO (Left) */}
            <Link to="/" onClick={closeMenu} className="flex-1 md:flex-none">
              <h1 className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic text-[#133250]">
                SHOE<span className="text-[#80B5D7]">POINT</span>
              </h1>
            </Link>

            {/* CATEGORIES (Middle) */}
            <div className="hidden md:flex flex-grow justify-center">
              <ul className="flex space-x-8 lg:space-x-12 text-[11px] lg:text-sm font-bold uppercase tracking-[0.15em] text-gray-700">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      to={`/products?category=${cat}`} // Removed .toLowerCase() to match data exactly
                      className="hover:text-[#80B5D7] transition-all relative"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* UTILITY ICONS (Right) */}
            <div className="flex items-center justify-end gap-3 md:gap-6 flex-1 md:flex-none">
              <div className=" lg:block">
                <WhatsAppHelp />
              </div>

              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`transition-colors p-1 ${isSearchOpen ? "text-[#80B5D7]" : "hover:text-[#80B5D7]"}`}
              >
                <FiSearch size={22} />
              </button>

              <Link
                to="/signin"
                className="hidden sm:block hover:text-[#80B5D7] transition-colors p-1"
              >
                <FiUser size={22} />
              </Link>

              <Link to="/cart" className="relative group p-1">
                <FiShoppingBag
                  size={22}
                  className="group-hover:text-[#80B5D7] transition-colors"
                />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </Link>

              <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* SEARCH DROPDOWN */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
            <Search onClose={() => setIsSearchOpen(false)} />
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 top-[110px] w-full bg-black/20 z-[150] transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu} // Closes menu if you tap the darkened area
      >
        <div
          className={`fixed right-0 top-[110px] bottom-0 w-64 bg-white z-[151] transition-transform duration-500 ease-in-out shadow-2xl ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevents menu from closing when clicking inside
        >
          <ul className="flex flex-col items-end space-y-8 text-xl font-black uppercase tracking-tighter text-[#133250] mt-16 px-8">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={closeMenu}
                className="hover:text-[#80B5D7] transition-colors"
              >
                <Link to={`/products?category=${cat}`}>{cat}</Link>
              </li>
            ))}

            <li className="pt-4  border-t border-gray-100">
              <Link
                to="/signin"
                onClick={closeMenu}
                className="block w-full py-2 px-4 text-white font-bold bg-[#133250] rounded text-center shadow-lg active:scale-95 transition-transform"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
