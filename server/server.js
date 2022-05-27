const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./routes/authRoutes");
const connectToDb = require("./utils/db");
const cors = require("cors");
const app = express();

const DIR = "./public/";
app.use('/public', express.static('public'));
app.use(express.json());
app.use(
  cors({
    origin: "https://sonofogrelouvre.netlify.app",
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api/user/", AuthRoutes);
connectToDb();