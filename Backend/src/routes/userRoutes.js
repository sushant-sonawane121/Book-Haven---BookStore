import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/user.controller.js"; // Adjust the import path as needed

const userRouter = express.Router();

// Route to register a new user
userRouter.post("/register", createUser);

// Route for user login
userRouter.post("/login", loginUser);

// Route to get all users (admin only)
userRouter.get("/", getAllUsers);

// Route to get a single user by ID (admin or the user themselves)
userRouter.get("/:id", getUserById);

// Route to update user details (admin or the user themselves)
userRouter.put("/:id", updateUser);

// Route to delete a user (admin only)
userRouter.delete("/:id", deleteUser);

export default userRouter;
