import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@real-estate.jmi53vb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )

const app = express();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
