import Book from "../models/book.model.js";
import multer from "multer";
import { formatDate } from "../utils/utils.js";

// Multer configuration
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
}).single("coverImage");

// Controller to add a book
export const addBook = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Upload error:", err);
      return res
        .status(400)
        .json({ message: "Error uploading file", error: err.message });
    }

    const { title, author, description, price, stock, category } = req.body;

    try {
      // Check if the book already exists
      let book = await Book.findOne({ title });
      if (book) {
        return res.status(400).json({ message: "Book already exists" });
      }

      // Create a new book document
      book = new Book({
        title,
        author,
        description,
        price,
        stock: stock || 0,
        category,
        coverImage: req.file
          ? { data: req.file.buffer, contentType: req.file.mimetype }
          : undefined,
      });

      // Save the book to the database
      const savedBook = await book.save();
      res.status(201).json({ message: "Book added successfully" });
    } catch (error) {
      console.error("Error adding book:", error);
      res
        .status(500)
        .json({ message: "Failed to add book", error: error.message });
    }
  });
};

export const getBooks = async (req, res) => {
  try {
    const { searchQuery } = req.body;

    // If no search query, return all books
    if (!searchQuery || searchQuery === undefined || searchQuery === "") {
      const books = await Book.find();

      return res.status(200).json({
        books: books.map((book) => ({
          id: book._id,
          coverImage: book.coverImage
            ? {
                contentType: book.coverImage.contentType,
                data: book.coverImage.data.toString("base64"), // Convert Buffer to Base64
              }
            : null,
          title: book.title,
          author: book.author,
          description: book.description,
          price: book.price,
          stock: book.stock,
          category: book.category,
          ratings: book.ratings,
          discountPrice: book.discountPrice,
          createdAt: formatDate(book.createdAt), // Format createdAt
        })),
      });
    }

    // If search query is provided, search by title, description, or author
    const books = await Book.find({
      $or: [
        { title: { $regex: searchQuery, $options: "i" } }, // Case-insensitive search
        { description: { $regex: searchQuery, $options: "i" } },
        { author: { $regex: searchQuery, $options: "i" } },
      ],
    });

    if (books.length === 0) {
      return res
        .status(404)
        .json({ message: "No books found matching your search." });
    }

    // Return the books that match the search query
    return res.status(200).json({
      books: books.map((book) => ({
        id: book._id,
        coverImage: book.coverImage
          ? {
              contentType: book.coverImage.contentType,
              data: book.coverImage.data.toString("base64"), // Convert Buffer to Base64
            }
          : null,
        title: book.title,
        author: book.author,
        description: book.description,
        price: book.price,
        stock: book.stock,
        category: book.category,
        ratings: book.ratings,
        createdAt: formatDate(book.createdAt), // Format createdAt
      })),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.body; // Destructure `id` from the request body

    if (!id) {
      return res.status(400).json({ message: "Book ID is required" }); // Validation for missing ID
    }

    const deletedBook = await Book.findByIdAndDelete(id); // Use Mongoose's `findByIdAndDelete`

    if (deletedBook) {
      return res
        .status(200)
        .json({ message: `${deletedBook.title} deleted successfully` });
    } else {
      return res.status(404).json({ message: "Book not found" }); // Handle case where no book is found
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error in book deletion", error: error.message });
  }
};

export const addDiscount = async (req, res) => {
  try {
    const { percent, price, id } = req.body;

    // Validate the percentage
    if (percent < 0 || percent > 100) {
      return res
        .status(400)
        .json({ message: "Percentage should be between 0 and 100." });
    }

    // Calculate discounted price
    const discountedPrice = parseFloat(
      (price * (1 - percent / 100)).toFixed(2)
    );
    // Update the book's discount price
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { discountPrice: discountedPrice },
      { new: true } // Return the updated book
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found." });
    }

    res
      .status(200)
      .json({ message: `Percentage added to ${updatedBook.title}` });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Error in adding percentage", error });
  }
};
