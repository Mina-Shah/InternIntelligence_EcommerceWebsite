import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ShoeStore</h1>

        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul
          className={`md:flex space-x-6 absolute md:static bg-blue-950 md:bg-transparent top-16 left-0 w-full md:w-auto md:flex-row flex-col items-center md:items-baseline transition-all duration-300 ease-in ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className="py-2 md:py-0">
            <a href="/" className="hover:text-orange-500">
              Home
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="/products" className="hover:text-orange-500">
              Categories
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="/cart" className="hover:text-orange-500">
              Cart
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="/contact" className="hover:text-orange-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
