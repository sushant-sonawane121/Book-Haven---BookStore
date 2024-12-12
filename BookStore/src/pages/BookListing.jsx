import React, { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

function BookListing() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch books with the default searchQuery as ""
    fetch("http://localhost:3001/api/book/getBooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchQuery: "" }), // Default search query is an empty string
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.books); // Assuming the API response contains a `books` field
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="py-10 min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="py-10 min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {books.length === 0 ? (
          <div>No books found</div>
        ) : (
          books.map((book) => (
            <div key={book.id} className="w-full px-2">
              <BookCard
                title={book.title}
                author={book.author}
                description={book.description}
                imageUrl={book.coverImage ? `data:${book.coverImage.contentType};base64,${book.coverImage.data}` : "https://picsum.photos/200/300"}
                price={`$${book.price}`}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BookListing;
