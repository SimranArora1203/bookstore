// const express = require("express");
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import bookRoute from "./route/book.route.js";
import path from "path";

const app = express();
dotenv.config();

app.use(cors());
app.use(cors({
  origin:["https://deploy-mern-frontend-six.vercel.app"],
          methods:["POST","GET"],
          credentials:true
          }));
app.use(express.json());
// const PORT = process.env.PORT || 4000;
const PORT=4000;
// const URI = process.env.MONGODBURI;
const URI="mongodb+srv://25629simran2020:vivek1234@cluster0.fgtcxux.mongodb.net/bookStore";
try {
  mongoose.connect(URI);

  console.log("connected");
} catch (error) {
  console.log(error);
}
app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});
app.get("/",(req,res)=>{
  res.send("hello")
});
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log("example app");
});
