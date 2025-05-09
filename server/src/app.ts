import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
import userRoutes from "./routes/user.route";
app.use("/api/users", userRoutes);

export default app;
