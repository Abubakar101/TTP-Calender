import express from "express";
import eventsController from "../controllers/eventsController";

const eventRoutes = express.Router();

eventRoutes
  .route("/events")
  .get(eventsController.findAll)
  .post(eventsController.create)
  .delete(eventsController.destroy);

export default eventRoutes;
