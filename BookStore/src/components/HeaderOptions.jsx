import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router"; // Corrected import
import homeBG from "../images/homeBG.jpg"; // Default fallback image


function HeaderOptions() {
 
  const userid = true; // Replace with actual logic to fetch user ID or state
  const image = null; // Placeholder for user profile image; replace with actual logic

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    // dispatch(logout()); // Dispatch the logout action
    setIsDropdownOpen(false); // Close dropdown after logout
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative bg-white dark:bg-slate-800" ref={dropdownRef}>
      <button
        className="flex items-center gap-1"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <div className="rounded-full border h-7 w-7 overflow-hidden">
          <img
            src={image || homeBG} // Use `image` if available, fallback to `homeBG`
            alt="profile"
            className="w-full h-full rounded-full"
          />
        </div>
        <FaAngleDown />
      </button>

      {isDropdownOpen && (
        <div className="border p-2 w-28 rounded absolute top-10 right-0 bg-white dark:bg-slate-800 dark:text-white shadow-lg">
          <ul className="space-y-1">
            <li className="hover:bg-gray-200 dark:hover:bg-gray-700 w-full rounded p-1">
              <NavLink to="/">Home</NavLink>
            </li>
            {userid && (
              <>
                <li className="hover:bg-gray-200 dark:hover:bg-gray-700 w-full rounded p-1">
                  <NavLink to="/dashboard">Profile</NavLink>
                </li>
                <li className="hover:bg-gray-200 dark:hover:bg-gray-700 w-full rounded p-1 text-red-500">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderOptions;
