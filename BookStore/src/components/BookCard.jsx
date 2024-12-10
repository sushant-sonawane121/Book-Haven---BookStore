import React from "react";
import { toast } from "react-toastify";
function BookCard({ title, author, description, imageUrl, price }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {author}
        </p>
        <p className="text-gray-700 dark:text-gray-400 mt-2 line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-cyan-500">{price}</span>
          <button
            onClick={() =>
              toast("Book Added Successfuly! Go To Cart", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              })
            }
            className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-400 focus:outline-none transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
