import React from "react";
import { NavLink } from "react-router";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <div className="dark:bg-slate-800 transition-all duration-500">
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(https://example.com/your-banner-image.jpg)",
        }}
      >
        <div className="relative container mx-auto text-center dark:text-white flex items-center justify-center h-full">
          <div>
            <h1 className="text-5xl font-bold leading-tight text-shadow-md">
              Welcome to Book Haven
            </h1>
            <p className="mt-4 text-xl">
              Your one-stop shop for books, from fiction to non-fiction and
              more!
            </p>
            <NavLink
              to="/shop"
              className="mt-6 inline-block bg-cyan-500 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-cyan-400 transition"
            >
              Shop Now
            </NavLink>
            <div className="mt-10">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      {/* Book Categories Section */}
      <section className="py-16 bg-white dark:bg-slate-800 transition-all duration-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
            Explore Our Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 md:px-30">
            <div className="category-card bg-slate-800 dark:bg-gray-700 p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white dark:text-white">
                Fiction
              </h3>
              <NavLink
                to="/fiction"
                className="text-cyan-500 hover:text-cyan-400"
              >
                Browse Fiction Books
              </NavLink>
            </div>
            <div className="category-card bg-slate-800 dark:bg-gray-700 p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white dark:text-white">
                Non-Fiction
              </h3>
              <NavLink
                to="/non-fiction"
                className="text-cyan-500 hover:text-cyan-400"
              >
                Browse Non-Fiction Books
              </NavLink>
            </div>
            <div className="category-card bg-slate-800 dark:bg-gray-700 p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white dark:text-white">
                Mystery & Thriller
              </h3>
              <NavLink
                to="/mystery"
                className="text-cyan-500 hover:text-cyan-400"
              >
                Browse Mystery Books
              </NavLink>
            </div>
            <div className="category-card bg-slate-800 dark:bg-gray-700 p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white dark:text-white">
                Sci-Fi & Fantasy
              </h3>
              <NavLink
                to="/sci-fi"
                className="text-cyan-500 hover:text-cyan-400"
              >
                Browse Sci-Fi & Fantasy Books
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-16 dark:bg-gray-900 transition-all duration-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
            Best Sellers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="https://picsum.photos/300"
                alt="Book 1"
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">
                Book Title 1
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Author Name
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="https://picsum.photos/300"
                alt="Book 2"
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">
                Book Title 2
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Author Name
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <img
                src="https://picsum.photos/300"
                alt="Book 3"
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">
                Book Title 3
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Author Name
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white dark:bg-slate-800 transition-all duration-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">
            About Book Haven
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
            Book Haven is your go-to destination for books of all kinds. Whether
            you’re looking for a thrilling mystery, an educational non-fiction
            book, or the latest fantasy adventure, we’ve got you covered. Our
            mission is to provide readers with the best selection of books and
            exceptional customer service.
          </p>
          <NavLink
            to="/about"
            className="inline-block bg-cyan-500 text-white py-2 px-6 rounded-lg text-xl font-semibold hover:bg-cyan-400 transition"
          >
            Learn More
          </NavLink>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="space-y-4">
            <NavLink to="/" className="text-xl font-bold">
              Book Haven
            </NavLink>
            <div className="flex justify-center space-x-8">
              <NavLink to="/about" className="hover:text-cyan-500">
                About Us
              </NavLink>
              <NavLink to="/contact" className="hover:text-cyan-500">
                Contact
              </NavLink>
              <NavLink to="/shop" className="hover:text-cyan-500">
                Shop
              </NavLink>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              © 2024 Book Haven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
