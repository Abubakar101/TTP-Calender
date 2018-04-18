const express = require("express");
const eventsController = require("../controllers/eventsController");

const eventRoutes = express.Router();

eventRoutes
  .route("/")
  .get(eventsController.indexAll)
  .post(eventsController.create)
  .delete(eventsController.destroy);

module.exports = eventRoutes;
