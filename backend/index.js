// const express = require("express");
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import bookRoute from "./route/book.route.js";
const app = express();
dotenv.config();

app.use(cors());
app.use(cors({
  origin:[""],
          methods:["POST","GET"],
          credentials:true
          }));
app.use(express.json());
// const PORT = process.env.PORT || 4000;
const PORT=4000;
// const URI = process.env.MONGODBURI;
const URI="mongodb://localhost:27017/bookStore";
try {
  mongoose.connect(URI);

  console.log("connected");
} catch (error) {
  console.log(error);
}
app.get("/",(req,res)=>{
  res.send("hello")
});
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log("example app");
});
