import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router"; // Corrected import
import homeBG from "../images/homeBG.jpg"; // Default fallback image
import { useDispatch, useSelector } from "react-redux"; // Added useDispatch and useSelector for Redux
import { logout } from "../redux/features/authSlice";

function HeaderOptions() {
  // Access user data from Redux store
  const userid = useSelector((state) => state.auth.id);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action to clear store and localStorage
    setIsDropdownOpen(false); // Close dropdown after logout
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Listen for clicks outside to close dropdown
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // This effect will run whenever the user ID changes in Redux
    // console.log("User ID has changed:", userid);
  }, [userid]); // This will trigger whenever `userid` changes

  return (
    <div className="relative z-50 bg-white dark:bg-slate-800" ref={dropdownRef}>
      <button
        className="flex items-center gap-1"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        <div className="rounded-full border h-7 w-7 overflow-hidden">
          <img
            src={homeBG} // Use userImage from Redux, fallback to homeBG
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
                  {isAdmin ? (
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  ) : (
                    <NavLink to="/profile">Profile</NavLink>
                  )}
                </li>
                <li className="hover:bg-gray-200 dark:hover:bg-gray-700 w-full rounded p-1 text-red-500 cursor-pointer">
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
