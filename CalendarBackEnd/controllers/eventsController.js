import Event from "../models/event";

const eventsController = {
  indexAll(req, res) {
    try {
      const data = Event.findAll();
      res.json({ data });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "400", error });
    }
  },

  create(req, res) {
    try {
      const data = Event.create({
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        description: req.body.description,
        dayId: req.body.dayId
      });
      res.json({ message: "ok", data });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "400", error });
    }
  },

  destroy(req, res) {
    try {
      Event.destroy(req.body.id);
      res.status(200).json({ message: "OK" });
    } catch (error) {
      console.log(error);
    }
  }
};

export default eventsController;
