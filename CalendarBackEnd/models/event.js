const db = require("../db/config");

const event = {};
event.findAll = () => {
  return db.query(`SELECT * FROM events ORDER BY id desc`);
};

event.create = event => {
  return db.one(
    `INSERT INTO events (startTime, endTime, description, dayId) VALUES ($1, $2, $3, $4) RETURNING *`,
    [event.startTime, event.endTime, event.description, event.dayId]
  );
};

event.destroy = id => {
  db.none(`DELETE FROM events WHERE id = $1`, id);
};

module.exports = event;
