import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { FaBars, FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


import HeaderOptions from "./HeaderOptions";
import HeaderNavigation from "./HeaderNavigation";

export default function Header() {
  const [isDark, setIsDark] = useState(localStorage.getItem("dark") === "true");
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [scrolly, setScrollY] = useState(false);
  const isUserLoged = true;

  const toggleNavMenu = () => setIsNavMenuOpen(!isNavMenuOpen);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-50 px-4 md:px-40 bg-white dark:bg-slate-800 dark:text-white ${
        scrolly ? "sticky bg-gray-100" : ""
      } top-0 left-0 right-0`}
    >
     
      <div className="flex justify-between items-center py-3">
        <div>
          <NavLink to="/">
            <h2 className="text-2xl">Book Haven</h2>
          </NavLink>
        </div>
        <div className="flex justify-center items-center space-x-10">
          <HeaderNavigation />
          <div className="flex items-center space-x-4 md:space-x-8">
            <div className="theme-icons flex gap-8 items-center">
              <span onClick={toggleTheme} className="cursor-pointer text-2xl">
                {isDark ? <FaMoon /> : <FaSun />}
              </span>
              <span className="relative inline-block p-2 rounded-lg">
                <span className="absolute top-0 right-0 border border-red-800 rounded-full bg-red-700 text-white text-xs font-bold w-4 h-4 flex items-center justify-center">
                  0
                </span>

                <FaShoppingCart
                  className="cursor-pointer text-2xl"
                  aria-label="Shopping Cart"
                />
              </span>

              {isUserLoged ? (
                <HeaderOptions />
              ) : (
                <NavLink
                  to="/login"
                  className="text-black bg-cyan-500 rounded px-2 border dark:text-white"
                >
                  Login
                </NavLink>
              )}
            </div>
            <div className="md:hidden flex items-center">
              <span className="cursor-pointer text-2xl">
                {isNavMenuOpen ? (
                  <IoClose onClick={toggleNavMenu} />
                ) : (
                  <FaBars onClick={toggleNavMenu} />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`fixed top-0 right-0 h-full w-4/5 bg-white border-l border-zinc-950 md:hidden transition-transform transform dark:bg-slate-800 dark:text-white ${
          isNavMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <IoClose onClick={toggleNavMenu} className="text-2xl mt-4 ml-4 z-50" />
        <ul className="flex flex-col items-center py-4 space-y-4">
          <li>
            <a href="/" onClick={toggleNavMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={toggleNavMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={toggleNavMenu}>
              Projects
            </a>
          </li>
          <li>
            <NavLink to="contact" onClick={toggleNavMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
