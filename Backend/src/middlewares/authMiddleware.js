import jwt from "jsonwebtoken";
import envData from "../config/envConfig.js";

export const authenticate = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }

  try {
    const decoded = jwt.verify(token, envData.SECRET_KEY);
    req.user = decoded; // Attach user info to the request
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid token" });
  }
};

// Admin check middleware
export const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    return next();
  }
  return res
    .status(403)
    .json({ message: "Access denied, you are not an admin" });
};
