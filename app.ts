import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db";
import authRoutes from "./src/routes/authRoutes";
import videoRoutes from "./src/routes/videoRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/admin", authRoutes);
app.use("/api/videos", videoRoutes);

export default app;
