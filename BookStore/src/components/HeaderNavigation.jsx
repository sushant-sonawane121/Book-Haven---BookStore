import React from "react";
import { NavLink } from "react-router";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";

function HeaderNavigation() {
  return (
    <nav className="hidden md:flex">
      <ul className="flex space-x-10 text-lg">
        {/* Home Link */}
        <li>
          <NavLink to="/" className="hover:text-cyan-500 transition">
            Home
          </NavLink>
        </li>

        {/* Categories Dropdown */}
        <li className="relative group">
          <button className="hover:text-cyan-500 transition flex items-center gap-1">
            <p>Categories</p>
            <span>
              <IoIosArrowDown className="text-sm mt-1 group-hover:hidden" />
              <IoIosArrowUp className="text-sm mt-1 hidden group-hover:block" />
            </span>
          </button>
          <ul className="absolute left-0 bg-white text-gray-800 shadow-lg rounded-lg w-48 z-10 opacity-0 group-hover:opacity-100 group-hover:block transition-opacity hidden">
            <li>
              <NavLink
                to="/fiction"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Fiction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/non-fiction"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Non-Fiction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mystery"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Mystery & Thriller
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/children"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Children's Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sci-fi"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Sci-Fi & Fantasy
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Best Sellers */}
        <li>
          <NavLink
            to="/best-sellers"
            className="hover:text-cyan-500 transition"
          >
            Best Sellers
          </NavLink>
        </li>

        {/* About Us */}
        <li>
          <NavLink to="/about" className="hover:text-cyan-500 transition">
            About Us
          </NavLink>
        </li>

        {/* Contact */}
        <li>
          <NavLink to="/contact" className="hover:text-cyan-500 transition">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
