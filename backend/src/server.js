import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/mongodb.js";
const app = express();

const port = process.env.PORT;
//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Localhost running on port ${port}`);
});
