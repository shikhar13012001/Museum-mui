const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const AuthRoutes = require("./routes/authRoutes");

const cors = require("cors");
const app = express();

const DIR = "./public/";
app.use('/public', express.static('public'));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api/user/", AuthRoutes);
const dbURI =
  "mongodb+srv://Shikhar:shikhar2015@cluster0.6nqa4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => app.listen(process.env.PORT || 5000))
  .catch((err) => console.log(err));
