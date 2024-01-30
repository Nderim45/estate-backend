import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user-route.js";
import authRouter from "./routes/auth-route.js";
import listingRouter from "./routes/listing-route.js";
import cookieParser from "cookie-parser";

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@real-estate.jmi53vb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

const app = express();

app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.options("*", (req, res, next) => {
  next();
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use((err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
