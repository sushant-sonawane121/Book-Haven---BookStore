import React, { useState } from "react";
import { FaUsers, FaBook, FaShoppingCart, FaBars, FaChevronDown } from "react-icons/fa";
import AddBooks from "./AddBooks";
import ManageBooks from "./ManageBooks";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("allCustomers");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "allCustomers":
        return <div className="p-4 text-white">All Customers Page</div>;
      case "addBook":
        return <AddBooks />;
      case "manageBooks":
        return <ManageBooks/>;
      case "seeOrders":
        return <div className="p-4 text-white">See Orders Page</div>;
      default:
        return <div className="p-4 text-white">Select a page</div>;
    }
  };

  return (
    <div className="flex h-screen dark:bg-slate-800">
      {/* Sidebar */}
      <div
        className={`$ {
          isSidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300 bg-slate-700 dark:bg-slate-800 shadow-lg flex flex-col`}
      >
        <button
          className="p-4 text-white focus:outline-none hover:bg-slate-600"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars size={24} />
        </button>

        <nav className="flex-1">
          <button
            onClick={() => setActivePage("allCustomers")}
            className={`$ {
              activePage === "allCustomers" ? "bg-slate-600" : ""
            } p-4 w-full text-white flex items-center gap-4 hover:bg-slate-600`}
          >
            <FaUsers size={20} />
            {isSidebarOpen && "All Customers"}
          </button>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`$ {
                activePage === "addBook" || activePage === "showAllBooks" ? "bg-slate-600" : ""
              } p-4 w-full text-white flex items-center gap-4 hover:bg-slate-600`}
            >
              <FaBook size={20} />
              {isSidebarOpen && (
                <>
                  Manage Book Store
                  <FaChevronDown
                    size={16}
                    className={`ml-auto transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </>
              )}
            </button>

            {isDropdownOpen && (
              <div className="relative bg-slate-600 dark:bg-slate-700 shadow-md mt-2">
                <button
                  onClick={() => setActivePage("addBook")}
                  className="p-4 w-full text-white text-left hover:bg-slate-500"
                >
                  Add Book
                </button>
                <button
                  onClick={() => setActivePage("manageBooks")}
                  className="p-4 w-full text-white text-left hover:bg-slate-500"
                >
                 Manage Books
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setActivePage("seeOrders")}
            className={`$ {
              activePage === "seeOrders" ? "bg-slate-600" : ""
            } p-4 w-full text-white flex items-center gap-4 hover:bg-slate-600`}
          >
            <FaShoppingCart size={20} />
            {isSidebarOpen && "See Orders"}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-slate-900 p-4 overflow-y-auto no-scrollbar">{renderPage()}</div>
    </div>
  );
};

export default Dashboard;