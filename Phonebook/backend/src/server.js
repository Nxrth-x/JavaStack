const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

const app = express();
app.use(express.json());
app.use(cors());

//Database
mongoose.connect("mongodb://localhost:27017/agenda", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

requireDir("./models");

//Routes
app.use("/", require("./routes"));
app.listen(3001);