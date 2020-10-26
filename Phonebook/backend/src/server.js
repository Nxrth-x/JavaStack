const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const requireDir = require("require-dir");

//Aplicação
const app = express();
app.use(express.json());
app.use(cors());

//Conectando ao banco
mongoose.connect("mongodb://localhost:27017/agenda", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

requireDir("./models");

//Rotas
app.use("/", require("./routes"));
app.listen(3001);