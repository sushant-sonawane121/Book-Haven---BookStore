import express from "express";
import cors from "cors";
import envData from "./src/config/envConfig.js";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/userRoutes.js";
import bookRouter from "./src/routes/bookRoutes.js";

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // Allow cookies if needed
};

// Middleware
app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// User routes
app.use("/api/user", userRouter);

// Book routes
app.use("/api/book", bookRouter);

// Server listener
app.listen(envData.PORT, () => {
  console.log(`Server running on http://localhost:${envData.PORT}`);
});
