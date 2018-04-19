const db = require("../db/config");

const event = {};
event.findAll = () => {
  return db.query(`SELECT * FROM events`);
};

event.create = event => {
  return db.one(
    `INSERT INTO events (start_time, end_time, description, day_id) VALUES ($1, $2, $3, $4) RETURNING *`,
    [event.start_time, event.end_time, event.description, event.day_id]
  );
};

event.destroy = id => {
  db.none(`DELETE FROM events WHERE id = $1`, id);
};

module.exports = event;
