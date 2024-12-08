import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h1 className="text-9xl font-bold text-cyan-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-lg mt-2 text-gray-600 dark:text-gray-400">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 px-6 py-2 bg-cyan-500 text-white text-lg rounded-lg hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}

export default NotFound;
