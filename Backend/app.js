const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
let app = express();
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const cookieParser = require('cookie-parser')
const captainRoutes = require('./routes/captain.routes')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/user", userRoutes);

app.use('/captain' , captainRoutes);

module.exports = app;
