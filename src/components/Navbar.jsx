import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ShoeStore</h1>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul
          className={`md:flex lg:space-x-6 md:static absolute bg-blue-900 md:bg-transparent top-16 left-0 w-full md:w-auto flex-col md:flex-row items-center md:items-baseline transition-all duration-300 ease-in z-50 shadow-md md:shadow-none ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className="py-2 md:py-0 w-full text-center md:w-auto">
            <Link to="/" className="hover:text-orange-500 block py-2">
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0 w-full text-center md:w-auto">
            <Link to="/products" className="hover:text-orange-500 block py-2">
              Categories
            </Link>
          </li>
          <li className="py-2 md:py-0 w-full text-center md:w-auto">
            <Link to="/cart" className="hover:text-orange-500 block py-2">
              Cart
            </Link>
          </li>
          <li className="py-2 md:py-0 w-full text-center md:w-auto">
            <Link to="/contact" className="hover:text-orange-500 block py-2">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;