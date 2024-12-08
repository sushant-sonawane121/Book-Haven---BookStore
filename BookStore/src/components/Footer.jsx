import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Book Haven</h2>
            <p className="text-gray-400">
              Your one-stop destination for books across all genres. Dive into the world of stories, knowledge, and inspiration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-cyan-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-500 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-500 transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#fiction" className="hover:text-cyan-500 transition">
                  Fiction
                </a>
              </li>
              <li>
                <a href="#non-fiction" className="hover:text-cyan-500 transition">
                  Non-Fiction
                </a>
              </li>
              <li>
                <a href="#children" className="hover:text-cyan-500 transition">
                  Children's Books
                </a>
              </li>
              <li>
                <a href="#sci-fi" className="hover:text-cyan-500 transition">
                  Sci-Fi & Fantasy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-500 transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Book Haven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
