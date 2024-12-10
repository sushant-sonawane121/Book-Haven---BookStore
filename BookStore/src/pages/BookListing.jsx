import React from "react";
import BookCard from "../components/BookCard";


function BookListing() {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description:
        "A classic novel of the Jazz Age, The Great Gatsby explores themes of decadence, idealism, resistance to change, social upheaval, and excess.",
      imageUrl: "https://picsum.photos/200/300",
      price: "$12.99",
    },
    {
      title: "1984",
      author: "George Orwell",
      description:
        "1984 is a dystopian novel set in a totalitarian society controlled by the Party, led by the figurehead Big Brother, where surveillance and censorship are rampant.",
      imageUrl: "https://picsum.photos/200/300",
      price: "$15.99",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description:
        "A gripping, heart-wrenching, and humorous story of racial injustice and loss of innocence in the Deep South during the 1930s.",
      imageUrl: "https://picsum.photos/200/300",
      price: "$10.99",
    },
  ];

  return (
    <div className="py-10 min-h-screen flex justify-center items-center bg-gray-50 dark:bg-gray-900">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl px-4">
        {books.map((book, index) => (
          <div key={index} className="w-full px-2"> {/* key should be here */}
            <BookCard
              title={book.title}
              author={book.author}
              description={book.description}
              imageUrl={book.imageUrl}
              price={book.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookListing;
