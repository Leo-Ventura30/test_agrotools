const express = require("express");
const routes = express.Router();

const questionsController = require("../controllers/questionsController");

routes.get("/", questionsController.find);
routes.post("/", questionsController.create);

module.exports = routes;
