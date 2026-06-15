const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
let app = express();
const cors = require("cors");

app.use(cors());



app.get("/", (req , res) =>{
  res.send("hello");
});

module.exports = app;
