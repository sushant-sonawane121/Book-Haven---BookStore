import User from "../models/user.model.js"; // Assuming the user model is in the models folder
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import envData from "../config/envConfig.js";

// Create a new user
export const createUser = async (req, res) => {
  const {
    name,
    mobile,
    email,
    password,
    address,
    country,
    state,
    city,
    postalCode,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      mobile,
      email,
      password: hashedPassword,
      address,
      country,
      state,
      city,
      postalCode,
    });

    // Save user to database
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// User login (for authentication)
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      envData.SECRET_KEY
      // { expiresIn: "1d" }
    );
    res.status(200).json({
      message: "Login successful",
      token,
      id: user._id,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Update user details
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    mobile,
    email,
    password,
    address,
    phone,
    state,
    city,
    postalCode,
  } = req.body;

  try {
    // Find user and update
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (password) {
      // Hash the password if it's being updated
      user.password = await bcrypt.hash(password, 10);
    }

    // Update other fields
    user.name = name || user.name;
    user.mobile = mobile || user.mobile;
    user.email = email || user.email;
    user.address = address || user.address;
    user.phone = phone || user.phone;
    user.state = state || user.state;
    user.city = city || user.city;
    user.postalCode = postalCode || user.postalCode;

    // Save updated user
    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user
    await user.remove();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
