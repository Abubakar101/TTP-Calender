const event = require("../models/event");

const eventsController = {};

eventsController.indexAll = async (req, res) => {
  try {
    const data = await event.findAll();
    res.json({ data });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "400", err });
  }
};

eventsController.create = async (req, res) => {
  try {
    const data = await event.create({
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      description: req.body.description,
      day_id: req.body.day_id
    });
    res.json({ message: "ok", data });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "400", err });
  }
};

eventsController.destroy = async (req, res) => {
  try {
    const data = event.destroy(req.body.id);
    res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(err);
  }
};

module.exports = eventsController;
