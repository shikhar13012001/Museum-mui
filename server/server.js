const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./routes/authRoutes");
const connectToDb = require("./utils/db");
const cors = require("cors");
const app = express();

const DIR = "./public/";
app.use("/public", express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: [/netlify\.app$/, /localhost:\d{4}$/],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api/user/", AuthRoutes);
connectToDb();
app.listen(5000, () => console.log("Server started on port 5000🚀"));
