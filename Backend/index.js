import express from "express";
import cors from "cors";
import envData from "./src/config/envConfig.js";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use("/api/user",userRouter);

app.listen(envData.PORT, () => {
  console.log(`server on http://localhost:${envData.PORT}`);
});
