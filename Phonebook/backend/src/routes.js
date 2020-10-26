const express = require("express");
const mongoose = require("mongoose");
const routes = express();

//Controller
const ContactController = require("./controllers/ContactController");

//Routes
routes.get("/", ContactController.Index);
routes.post("/create", ContactController.Create);
routes.put("/update/:id", ContactController.Update);
routes.delete("/delete/:id", ContactController.Delete);

module.exports = routes;