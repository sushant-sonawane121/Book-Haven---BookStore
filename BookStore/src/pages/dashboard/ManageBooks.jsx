import { useState, useEffect } from "react";
import React from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import DiscountDialog from "../../components/dialog Boxex/DiscountDialog";

function ManageBooks() {
  const token = useSelector((state) => state.auth.token);
  const [books, setBooks] = useState([]); // Initialized as an empty array
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null); // To store the selected book's data

  const fetchBooks = (searchQuery) => {
    setLoading(true);
    fetch("http://localhost:3001/api/book/getBooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchQuery }),
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks(data?.books || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setBooks([]);
        setLoading(false);
      });
  };

  const deleteBook = (bookId) => {
    if (!bookId) {
      toast.error("Invalid book ID");
      return;
    }

    fetch("http://localhost:3001/api/book/deleteBook", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: bookId }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message || "Failed to delete book");
          });
        }
        return response.json();
      })
      .then((data) => {
        toast.success(data.message || "Book deleted successfully");
        fetchBooks(""); // Refresh the book list
      })
      .catch((error) => {
        toast.error(error.message || "Error deleting book");
      });
  };

  const openDialog = (book) => {
    setSelectedBook(book); // Set the currently selected book
    setDialogOpen(true); // Open the dialog
  };

  const handleUpdate = (discount, bookId, price) => {
    console.log("Discount:", discount, "Book ID:", bookId, "Price:", price);
    fetch("http://localhost:3001/api/book/addDiscount", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ percent: discount, price: price, id: bookId }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((err) => {
            throw new Error(err.message || "Failed to Add Discount");
          });
        }
        return response.json();
      })
      .then((data) => {
        toast.success(data.message || "Added successfully");
        fetchBooks(""); // Refresh the book list
      })
      .catch((error) => {
        toast.error(error.message || "Error adding Discount");
      });

    // Close the dialog after handling the update
    setDialogOpen(false);
  };

  useEffect(() => {
    fetchBooks("");
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(searchQuery);
  };

  if (loading) {
    return (
      <div className="py-10 min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="mb-10">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center w-full max-w-md mx-auto"
        >
          <input
            type="text"
            id="searchQuery"
            name="searchQuery"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by Category or Book Name"
            className="w-full py-2 px-4 rounded-l-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 px-4 py-2 bg-cyan-600 text-white rounded-r-lg hover:bg-cyan-500 focus:outline-none transition"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {books?.length === 0 ? (
          <div className="col-span-5 text-center text-gray-500">
            No books found
          </div>
        ) : (
          books.map((book) => (
            <div
              key={book.id}
              className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-40 object-cover rounded-t-lg">
                <img
                  src={
                    book.coverImage
                      ? `data:${book.coverImage.contentType};base64,${book.coverImage.data}`
                      : "https://picsum.photos/200/300"
                  }
                  alt={book.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                {book.discountPrice !== 0 && (
                  <div className="absolute right-0 bottom-0 bg-teal-600 text-white rounded text-sm px-2 py-1">
                    {(
                      ((book.price - book.discountPrice) / book.price) *
                      100
                    ).toFixed(2)}
                    % discount
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800 dark:text-white truncate">
                  {book.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                  {book.author}
                </p>
                <p className="text-gray-700 dark:text-gray-400 mt-2 line-clamp-2 text-sm">
                  {book.description}
                </p>
                <div className="mt-4 flex gap-5 justify-between items-center">
                  <span className="text-sm font-bold text-green-600">
                    {book.discountPrice === 0 ? (
                      `$${book.price}`
                    ) : (
                      <>
                        <p>${book.discountPrice}</p>
                        <strike className="text-red-400">
                          <p className="italic">${book.price}</p>
                        </strike>
                      </>
                    )}
                  </span>
                  <div className="flex justify-evenly w-full">
                    <button
                      onClick={() => deleteBook(book.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded-lg hover:bg-red-500 focus:outline-none transition duration-300 text-xs"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => openDialog(book)}
                      className="bg-teal-600 text-white px-2 py-1 rounded-lg hover:bg-teal-500 focus:outline-none transition duration-300 text-xs"
                    >
                      Manage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {isDialogOpen && selectedBook && (
        <DiscountDialog
          isOpen={isDialogOpen}
          onClose={() => setDialogOpen(false)}
          onUpdate={handleUpdate}
          bookId={selectedBook.id}
          price={selectedBook.price}
          isDiscount={selectedBook.discountPrice}
        />
      )}
    </div>
  );
}

export default ManageBooks;
