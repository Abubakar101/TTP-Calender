const express = require("express");
const eventsController = require("../controllers/eventsController");

const eventRoutes = express.Router();

eventRoutes
  .route("/events")
  .get(eventsController.findAll)
  .post(eventsController.create)
  .delete(eventsController.destroy);
module.exports = eventRoutes;
