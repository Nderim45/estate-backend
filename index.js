import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user-route.js";
import authRouter from "./routes/auth-route.js";

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@real-estate.jmi53vb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
