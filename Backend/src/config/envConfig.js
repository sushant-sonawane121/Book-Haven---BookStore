import dotenv from "dotenv";

dotenv.config();

const envData = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || null,
  SECRET_KEY: process.env.SECRET_KEY,
};

export default envData;
