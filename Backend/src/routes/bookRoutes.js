import { addBook, getBooks } from "../controllers/book.controller.js";
import express from "express";
import { authenticate } from "../middlewares/authMiddleware.js";
const bookRouter = express.Router();

// Routet to add new Book
bookRouter.post("/addBook", authenticate, addBook);

// Route to get Books by search or default
bookRouter.post("/getBooks", getBooks);

export default bookRouter;
