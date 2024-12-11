import mongoose from "mongoose";
import envData from "./envConfig.js";

const connectDB = async () => {
  try {
    const uri = envData.MONGO_URI;

    if (!uri) {
      throw new Error("MONGO_URI is not defined in the environment variables.");
    }

    const connection = await mongoose.connect(uri);

    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
